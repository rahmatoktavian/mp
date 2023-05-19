import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Appbar, TextInput, Button, HelperText } from 'react-native-paper';
import supabase from '../../config/supabase';
import { Picker } from '@react-native-picker/picker';

export default function BookUpdateScreen({ navigation, route }) {
    //state for picker data
    const [listCategory, setListCategory] = useState([]);

    //state for picker & input
    const [inputCategory, setInputCategory] = useState(0);
    const [inputTitle, setInputTitle] = useState('');

    //selected data (from previous screen)
    const id = route.params.id;

    //initial function (first function will run in this page)
    useEffect(() => {
        getCategory();
        getDataDetail();
    }, []);

    //get data category
    const getCategory = async() => {
        const { data, error } = await supabase
                                    .from('category')
                                    .select('id, name')
                                    .order('name', {ascending:true});
        
        setListCategory(data);
    }

    //get data detail based on selected data (using ID)
    const getDataDetail = async() => {
        const { data, error } = await supabase
                                    .from('book')
                                    .select('category_id, title')
                                    .eq('id', id)
                                    .single();
                                    
        //assign value to picker & input
        setInputCategory(data.category_id)
        setInputTitle(data.title);
    }

    //update data to supabase
    const onSave = async() => {
        const { data, error } = await supabase
                                    .from('book')
                                    .update({ category_id:inputCategory, title:inputTitle })
                                    .eq('id', id)

        //display notif then move to list screen
        if(error) {
            Alert.alert('Alert', error.message, [
                {text: 'OK'},
            ]);
        } else {
            Alert.alert('Message', 'Data Updated', [
                {text: 'OK', onPress: () => navigation.goBack()},
            ]);
        }
    }

    //delete confirmation
    const onDeleteConfirm = async() => {
        Alert.alert('Delete', 'Are you sure guys?', [
            {text: 'Cancel'},
            {text: 'OK', onPress: () => onDelete()},
        ]);
    }

    //delete data to supabase
    const onDelete = async() => {
        const { data, error } = await supabase
                                    .from('book')
                                    .delete()
                                    .eq('id', id)

        //display notif then move to list screen
        Alert.alert('Message', 'Data Deleted', [
            {text: 'OK', onPress: () => navigation.goBack()},
        ]);
    }

    return(
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Update" />
                <Appbar.Action icon="delete" onPress={() => onDeleteConfirm()} size={26} />
            </Appbar.Header>

            <HelperText>Category</HelperText>
            <Picker
                selectedValue={inputCategory}
                onValueChange={(itemValue, itemIndex) => setInputCategory(itemValue)}
            >
                {listCategory.map(category => 
                    <Picker.Item label={category.name} value={category.id} key={category.id} />
                )}
            </Picker>

            <TextInput
                label="Title"
                value={inputTitle}
                onChangeText={text => setInputTitle(text)}
                style={{ margin:5 }}
            />

            <Button 
                icon="content-save" 
                mode="contained" 
                onPress={() => onSave()} 
                style={{ margin:5 }}
            >
                Save
            </Button>
        </>
    )
}