import React, { Props } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
    section: {
        padding: 10,
    },
    titleText: {
        fontSize: 18,
        color: 'grey'
    },
    textInput: {
        fontSize: 30,
        fontWeight: '700'
    }
})

interface BillInputProps {
    label: string, 
    amount: string,
    placeholderText: string,
    handleTextChange?: any
}

const BillInput: React.FC<BillInputProps> = ({label, amount, placeholderText, handleTextChange}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput 
                keyboardType="numeric"
                placeholder={placeholderText}
                defaultValue={amount}
                onChangeText={handleTextChange}
            />
        </View>
    );
}

export default BillInput;