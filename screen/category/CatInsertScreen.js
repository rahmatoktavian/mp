import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default function CatInsertScreen({ navigation }) {
    return(
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Category Insert" />
            </Appbar.Header>
        </>
    )
}