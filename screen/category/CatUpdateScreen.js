import * as React from 'react';
import { Appbar, Text } from 'react-native-paper';

export default function CatUpdateScreen({ navigation, route }) {
    return(
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title={route.params.name} />
            </Appbar.Header>
        </>
    )
}