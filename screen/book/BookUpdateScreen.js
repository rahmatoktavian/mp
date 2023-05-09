import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default function BookUpdateScreen({ navigation }) {
    return(
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Book Update" />
            </Appbar.Header>
        </>
    )
}