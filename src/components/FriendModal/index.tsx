import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import useColorScheme from "../../../hooks/useColorScheme";
import Colors from "../../constants/Colors";
import { TextInput } from "../Themed";

export default function FriendModel({ setNumberOfFriends } : any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [numFriends, setNumFriends] = useState(0);

  const resetNumFriends = () => {
    setNumFriends(0);
  }
  const onPressSet = () => {
    setNumberOfFriends(numFriends);
    resetNumFriends();
    setModalVisible(!modalVisible)
  }
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>How many friends do you want to splitty with?</Text>
            <TextInput
                style={[ styles.textInput, { backgroundColor: Colors['light'].background }]}
                placeholderTextColor="#CCC"
                keyboardType='numeric'
                returnKeyType='done'
                placeholder={'Enter number of friends...'}
                onChangeText={(num) => setNumFriends(parseInt(num))}
            />
            <View style={styles.buttonFooter}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onPressSet}
              >
                <Text style={styles.textStyle}>Set</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Split Bill</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonFooter: {
      flexDirection: "row"
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    titleText: {
      fontSize: 18,
      color: '#616161',
      letterSpacing: 1.5,
      fontWeight: '700'
    },
    textInput: {
      fontSize: 18,
      fontWeight: '700',
      marginBottom: 15
  }
  });