import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Appbar, TextInput, Button, Snackbar } from 'react-native-paper';
import supabase from '../../config/supabase';

export default function CatUpdateScreen({ navigation, route }) {
    //state
    const [inputName, setInputName] = useState('');

    //selected data (from previous screen)
    const id = route.params.id;

    //initial function (first function will run in this page)
    useEffect(() => {
        getDataDetail();
    }, []);

    //get data detail based on selected data (using ID)
    const getDataDetail = async() => {
        const { data, error } = await supabase
                                    .from('category')
                                    .select('name')
                                    .eq('id', id)
                                    .single();
        setInputName(data.name);
    }

    //update data to supabase
    const onSave = async() => {
        const { data, error } = await supabase
                                    .from('category')
                                    .update({ name:inputName })
                                    .eq('id', id)

        //display notif then move to list screen
        Alert.alert('Message', 'Data Updated', [
            {text: 'OK', onPress: () => navigation.push('CatListScreen')},
        ]);
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
                                    .from('category')
                                    .delete()
                                    .eq('id', id)

        //display notif then move to list screen
        Alert.alert('Message', 'Data Deleted', [
            {text: 'OK', onPress: () => navigation.push('CatListScreen')},
        ]);
    }

    return(
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Update" />
                <Appbar.Action icon="delete" onPress={() => onDeleteConfirm()} size={26} />
            </Appbar.Header>

            <TextInput
                label="Name"
                value={inputName}
                onChangeText={text => setInputName(text)}
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