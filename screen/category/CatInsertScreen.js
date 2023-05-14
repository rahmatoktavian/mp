import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import supabase from '../../config/supabase';

export default function CatInsertScreen({ navigation }) {
    //state
    const [inputName, setInputName] = useState('');

    //insert data to supabase
    const onSave = async() => {
        const { data, error } = await supabase
                                    .from('category')
                                    .insert({ name:inputName });

        //display notif then move to list screen
        Alert.alert('Message', 'Data Inserted', [
            {text: 'OK', onPress: () => navigation.push('CatListScreen')},
        ]);
    }

    return(
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Insert" />
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