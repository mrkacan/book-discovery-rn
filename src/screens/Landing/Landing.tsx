import * as React from 'react';
import {StyleSheet, View} from 'react-native';

import {AuthStackScreenProps} from '../../../types';
import Button from "../../components/Button/Button";
import Spacer from "../../components/Spacer/Spacer";

export default function Landing({navigation}: AuthStackScreenProps<'Landing'>) {
    return (
        <View style={styles.container}>
            <Button onPress={() => navigation.navigate('Login')}>
                Login
            </Button>
            <Spacer height={24}/>
            <Button onPress={() => navigation.navigate('Register')}>
                Register
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
