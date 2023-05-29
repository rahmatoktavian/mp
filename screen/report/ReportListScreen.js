import React from 'react';
import { Appbar, List } from 'react-native-paper';

export default function ReportListScreen({ navigation }) {
    return(
        <>
            <Appbar.Header>
                <Appbar.Content title="Report" />
            </Appbar.Header>

            <List.Item
                title="Report Table"
                left={() => <List.Icon icon="table" style={{marginLeft:10}} />}
                right={() => <List.Icon icon="arrow-right" />}
                onPress={() => navigation.navigate('ReportTableScreen')}
                style={{margin:5}}
            />
            <List.Item
                title="Report Chart"
                left={() => <List.Icon icon="chart-pie" style={{marginLeft:10}} />}
                right={() => <List.Icon icon="arrow-right" />}
                onPress={() => navigation.navigate('ReportChartScreen')}
                style={{margin:5}}
            />
        </>
    )
}
    