import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Appbar, List, FAB } from 'react-native-paper';
import supabase from '../../config/supabase';

export default function BookListScreen({ navigation }) {
    //state [statetitle, function to change state data]
    const [dataList, setDataList] = useState([]);

    //initial function (first function will run in this page)
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getData();
        });
    
        return unsubscribe;
    }, [navigation]);

    //get data using supabase API
    const getData = async() => {
        const { data, error } = await supabase
                                    .from('book')
                                    .select('id, title, category(name)')
                                    .order('id', {ascending:false});
                                    
        setDataList(data);
    }

    return(
        <>
            <Appbar.Header>
                <Appbar.Content title="Book" />
            </Appbar.Header>

            <FlatList
                data={dataList}
                renderItem={({item}) => 
                    <List.Item
                        title={item.title}
                        description={item.category.name}
                        left={() => <List.Icon icon="book" style={{marginLeft:20}} />}
                        right={() => <List.Icon icon="pencil" />}
                        onPress={() => navigation.navigate('BookUpdateScreen', {id:item.id})}
                    />
                }
                keyExtractor={item => item.id}
            />

            <FAB
                icon="plus"
                size="small"
                onPress={() => navigation.navigate('BookInsertScreen')}
                style={{position: 'absolute', margin:20, right:0, bottom:0}}
            />
        </>
    )
}
    