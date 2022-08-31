import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import useColorScheme from '../../../hooks/useColorScheme';
import { Text, View, TextInput } from '../Themed';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    inputContainer: {
        padding: 5,
        marginVertical: 5,
        flexDirection: 'row',
        width: 200,
        justifyContent: 'space-between'
    },
    textInput: {
        fontSize: 18,
        fontWeight: '700'
    }
});

export interface Item {
    itemName: string
    amount: string
    setItemName?: any
    setAmount?: any
}

export default function ItemInput ({itemName, amount, setItemName, setAmount} : Item) {

    const colorScheme = useColorScheme();
    // const lightColor = "rgba(0,0,0,0.8)";
    // const darkColor = "rgba(255,255,255,0.8)";
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={[ styles.textInput, { color: Colors[colorScheme].text }]}
                placeholderTextColor="#666"
                keyboardType='default'
                returnKeyType='done'
                placeholder={'Enter Item...'}
                value={itemName}
                onChangeText={(name) => setItemName(name)}
            /> 
            <TextInput
                style={[ styles.textInput, { color: Colors[colorScheme].text }]}
                placeholderTextColor="#666"
                keyboardType='numeric'
                returnKeyType='done'
                placeholder={'$'}
                value={amount}
                onChangeText={(amount) => setAmount(amount)}
            />
        </View>
    );
};
