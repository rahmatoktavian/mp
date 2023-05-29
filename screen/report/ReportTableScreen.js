import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Appbar, DataTable } from 'react-native-paper';
import supabase from '../../config/supabase';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

export default function ReportTableScreen({ navigation }) {
    //state for data
    const [dataList, setDataList] = useState([]);

    //initial function
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getData();
        });
    
        return unsubscribe;
    }, [navigation]);

    //get data
    const getData = async() => {
        const { data, error } = await supabase
                                    .from('book')
                                    .select('id, title, stock, category(name)')
                                    .order('title', {ascending:true});
        
        setDataList(data);
    }

    //download data
    const downloadData = async() => {

        //create pdf content based on html (table)
        let html = `<html>
                    <body>
                      <table style="width:100%;border: 1px solid">
                        <tr>
                            <th align="left">Book Title</th>
                            <th align="left">Category</th>
                            <th align="left">Stock</th>
                        </tr>`;

                        //loop data from state
                        dataList.map((item) => {
                            html += `<tr>`;
                                html += `<td>`+item.title+`</td>`;
                                html += `<td>`+item.category.name+`</td>`;
                                html += `<td>`+item.stock+`</td>`;
                            html += `</tr>`;
                        })

            html += `</table>
                    </body>
                    </html>`;

        //save data to pdf
        const { uri } = await Print.printToFileAsync({ html });
        await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
    }

    return(
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Report Table" />
                <Appbar.Action icon="download" onPress={() => downloadData()} />
            </Appbar.Header>

            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Book Title</DataTable.Title>
                    <DataTable.Title>Category</DataTable.Title>
                    <DataTable.Title numeric>Stock</DataTable.Title>
                </DataTable.Header>

                <FlatList
                    data={dataList}
                    renderItem={({item}) => 
                        <DataTable.Row>
                            <DataTable.Cell>{item.title}</DataTable.Cell>
                            <DataTable.Cell>{item.category.name}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.stock}</DataTable.Cell>
                        </DataTable.Row>
                    }
                    keyExtractor={item => item.id}
                />
            </DataTable>
        </>
    )
}
    