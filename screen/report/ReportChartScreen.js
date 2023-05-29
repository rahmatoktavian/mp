import React from 'react';
import { Appbar } from 'react-native-paper';

export default function ReportChartScreen({ navigation }) {
    return(
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Report Chart" />
            </Appbar.Header>
        </>
    )
}
    