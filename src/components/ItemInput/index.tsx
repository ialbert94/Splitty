import React, { Props } from 'react';
import { StyleSheet } from 'react-native';
import useColorScheme from '../../../hooks/useColorScheme';
import { Text, View, TextInput } from '../Themed';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    section: {
        padding: '10px',
        marginVertical: '10',
        flexDirection: 'row'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 18,
        color: '#616161',
        letterSpacing: 1.5,
        fontWeight: '700'
    },
    textInput: {
        fontSize: 18,
        fontWeight: '700'
    }
});

export interface BillInputProps {
    label: string, 
    amount: string,
    placeholderText: string,
    handleTextChange?: any
}

export default function ItemInput ({label, amount, placeholderText, handleTextChange} : BillInputProps) {
    const colorScheme = useColorScheme();
    
    return (
        <View style={styles.section}>
            <Text
                style={styles.titleText}
                lightColor="rgba(0,0,0,0.8)"
                darkColor="rgba(255,255,255,0.8)">
                {label}
            </Text>
            <View style={styles.inputContainer}>
            <TextInput
                style={[ styles.textInput, { color: Colors[colorScheme].text }]}
                placeholderTextColor="#666"
                keyboardType='numeric'
                returnKeyType='done'
                placeholder={placeholderText}
                defaultValue={amount}
                onChangeText={handleTextChange}
            />
            </View>
        </View>
    );
};
