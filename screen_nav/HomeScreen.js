import * as React from 'react';
import { View } from 'react-native';
import { Appbar, Button, Text } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
    const [number, setNumber] = React.useState(1);

    return(
        <>
            <Appbar.Header>
                <Appbar.Content title="Home" />
                <Appbar.Action icon="account" onPress={() => navigation.navigate('ProfileScreen', {icon:'account', title:'Account Button'})} />

                <Appbar.Action icon="cog" onPress={() => navigation.navigate('ProfileScreen', {icon:'cog', title:'Setting Button'})} />
            </Appbar.Header>

            <Button icon="plus" mode="contained" onPress={() => setNumber(number+1)} style={{margin:10}}>
            Increment
            </Button>

            <View style={{ alignItems:'center'}}>
            <Text style={{fontSize:30}}>{number}</Text>
            </View>

            <Button icon="minus" mode="contained" onPress={() => setNumber(number-1)} style={{margin:10}}>
            Decrement
            </Button>
        </>
    )
}
    