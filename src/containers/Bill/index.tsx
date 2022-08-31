import React, { Props } from 'react';
import { StyleSheet } from 'react-native';
import useColorScheme from '../../../hooks/useColorScheme';
import { View, TextInput } from '../Themed';
import Colors from '../../constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    section: {
        padding: 10,
        marginVertical: 10,
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

export interface Friend {
    name: string
    handleNameChange: any
    handleAddFriend: any
}


export default function BillContainer ({name, handleNameChange, handleAddFriend} : Friend) {
    const colorScheme = useColorScheme();
    
    return (
        <View style={styles.section}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={[ styles.textInput, { color: Colors[colorScheme].text }]}
                    placeholderTextColor="#666"
                    keyboardType='default'
                    returnKeyType='done'
                    placeholder={'Add Friend'}
                    defaultValue={name}
                    onChangeText={handleNameChange}
                />
                <MaterialIcons
                    name='add'
                    size={24}
                    onPress={handleAddFriend}
                />
            </View>
        </View>
    );
};
