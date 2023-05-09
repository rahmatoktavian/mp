import * as React from 'react';
import { Appbar, Button } from 'react-native-paper';

export default function ProfileScreen({ navigation, route }) {
    const { icon, title } = route.params;
    
    return(
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Profile" />
            </Appbar.Header>

            <Button icon={icon} mode="contained" onPress={() => console.log('Pressed')}>
            {title}
            </Button>
        </>
    )
}
    