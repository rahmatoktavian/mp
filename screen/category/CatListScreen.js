import React, { useEffect, useState } from 'react';
import { Appbar, List } from 'react-native-paper';
import supabase from '../../config/supabase';

export default function CatListScreen({ navigation }) {
    //state [stateName, function to change state data]
    const [dataList, setDataList] = useState([]);

    //initial function (first function will run in this page)
    useEffect(() => {
        getData();
    });

    //get data using supabase API
    const getData = async() => {
        const { data, error } = await supabase
                                    .from('category')
                                    .select('id, name');
        setDataList(data);
    }

    //get data using manual fetch process
    const getDataManual = async() => {
        //request
        fetch("https://cdjndiwlkguoekmsamkv.supabase.co/rest/v1/category?select=id,name", {
            method: 'get',
            headers: new Headers({
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkam5kaXdsa2d1b2VrbXNhbWt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTczNjI1NTIsImV4cCI6MTk3MjkzODU1Mn0.fZzlfdwRpKp5e3nkw-8FrmSGYJyejnz5Dlh_21o-MW4', 
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkam5kaXdsa2d1b2VrbXNhbWt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTczNjI1NTIsImV4cCI6MTk3MjkzODU1Mn0.fZzlfdwRpKp5e3nkw-8FrmSGYJyejnz5Dlh_21o-MW4'
            }), 
        })

        //respond
        .then(respond => respond.json())
        .then((data) => {
            setDataList(data);
        })
    }

    return(
        <>
            <Appbar.Header>
                <Appbar.Content title="Category" />
                <Appbar.Action icon="plus-circle" onPress={() => navigation.navigate('CatInsertScreen')} />
            </Appbar.Header>

            <List.Section>
                {dataList.map((row) => 
                    <List.Item
                        title={row.name}
                        right={() => <List.Icon icon="pencil" />}
                        onPress={() => navigation.navigate('CatUpdateScreen', {id:row.id, name:row.name})}
                    />
                )}
            </List.Section>
        </>
    )
}
    