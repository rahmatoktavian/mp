import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Appbar, TextInput, Button, HelperText } from 'react-native-paper';
import supabase from '../../config/supabase';
import { Picker } from '@react-native-picker/picker';

export default function BookInsertScreen({ navigation }) {
    //state for picker data
    const [listCategory, setListCategory] = useState([]);

    //state for picker & input
    const [inputCategory, setInputCategory] = useState(0);
    const [inputTitle, setInputTitle] = useState('');

    //initial function (first function will run in this page)
    useEffect(() => {
        getCategory();
    }, []);

    //get data category
    const getCategory = async() => {
        const { data, error } = await supabase
                                    .from('category')
                                    .select('id, name')
                                    .order('name', {ascending:true});
        
        setListCategory(data);
    }

    //insert data to supabase
    const onSave = async() => {
        const { data, error } = await supabase
                                    .from('book')
                                    .insert({ category_id:inputCategory, title:inputTitle });

        //display notif then move to list screen
        if(error) {
            Alert.alert('Alert', error.message, [
                {text: 'OK'},
            ]);
        } else {
            Alert.alert('Message', 'Data Inserted', [
                {text: 'OK', onPress: () => navigation.goBack()},
            ]);
        }
    }

    return(
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Insert" />
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