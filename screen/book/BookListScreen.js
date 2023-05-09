import React, { useEffect, useState } from 'react';
import { Appbar, List } from 'react-native-paper';
import { supabase } from '../../config/supabase';

export default function BookListScreen({ navigation }) {
    return(
        <>
            <Appbar.Header>
                <Appbar.Content title="Book" />
                <Appbar.Action icon="plus" onPress={() => navigation.navigate('BookInsertScreen')} />
            </Appbar.Header>
        </>
    )
}
    