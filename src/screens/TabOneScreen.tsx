import React, { useEffect, useState } from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, TextInput, View } from '../components/Themed';
import { RootTabScreenProps } from '../../types';
import ItemInput, { Item } from '../components/ItemInput';
import SplitOutput from '../containers/SplitOutput';
import FriendInput, { Friend } from '../components/FriendInput';
import FriendModel from '../components/FriendModal';
import BillContainer from '../containers/Bill';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [ bill, setBill ] = useState('');
  const [ tip, setTip ] = useState('10');
  const [ split, setSplit ] = useState(2);
  const [ splitTotal, setSplitTotal ] = useState('0.00');
  const [ name, setName ] = useState('');
  const [ friends, updateFriends ] = useState<Friend[]>([]);
  const [ numberOfFriends, setNumberOfFriends ] = useState();
  const [ items, setItems ] = useState<Item[]>([]);
  const [itemName, setItemName] = useState('');
  const [amount, setAmount] = useState('');
  const colorScheme = useColorScheme();
  const defaultValue = 0;

  const handleBillChange = (value: string) => {
    setBill(value);
  };
  
  const handleTipChange = (value: string) => {
    setTip(value);
  };
  
  const handleSplitAdd = () => {
    setSplit((split) => {
      return split + 1;
    });
  };

  const handleSplitRemove = () => {
    setSplit((split) => {
      return split - 1;
    })
  };

  const addItem = (itemToAdd: Item) => {
    setItems([...items, itemToAdd])
  }

  const handleNameChange = (name : string) => {
    setName(name);
  };

  const handleAddFriend = (friendToAdd : Friend) => {
    updateFriends([...friends, friendToAdd]);
  }

  useEffect(() => {
    const total = parseFloat(bill) || defaultValue;
    const tipPercentage = parseInt(tip) || defaultValue;
    const splitCount = split || defaultValue;

    const splitTotal = ((total + (tipPercentage / 100) * total) / splitCount).toFixed(2);
    setSplitTotal(splitTotal.toString());
  }, [bill, tip, split]);
  console.log(numberOfFriends);
  // Use FlatList to extend the number of friends you have
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <View style={styles.container}>
        <Text style={styles.title}>Tab One</Text>
        <FriendModel 
          setNumberOfFriends={setNumberOfFriends}
        />
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.title}>Friends you have:</Text>
          <Text style={styles.title}>{numberOfFriends}</Text>
        </View>
        <FriendInput
          name={name}
          handleNameChange={handleNameChange}
          handleAddFriend={handleAddFriend}
        />
        <View style={styles.inputContainer}>
          <TextInput
              style={[ styles.textInput, { color: Colors[colorScheme].text }]}
              placeholderTextColor="#666"
              keyboardType='default'
              returnKeyType='done'
              placeholder={'Add Item'}
              defaultValue={name}
              onChangeText={handleNameChange}
          />
          <MaterialIcons
              name='add'
              size={24}
              onPress={() => addItem({itemName: '', amount: ''})}
          />
            </View>
        {items.map((item) => {
          return(
            <ItemInput 
              itemName={item.itemName}
              amount={item.amount}
            />
          )
        })}
        {/* <ItemInput 
          label='Tip(%): '
          amount={tip}
          placeholderText='0%'
          handleTextChange={handleTipChange}
          /> */}
        <SplitOutput
          split={split}
          splitTotal={splitTotal}
          handleSplitAdd={handleSplitAdd}
          handleSplitRemove={handleSplitRemove}
          />
          {/* <BillContainer items={items}></BillContainer> */}
        {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-between'
  },
  textInput: {
      fontSize: 18,
      fontWeight: '700'
  },
  splitContainer: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 30
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
