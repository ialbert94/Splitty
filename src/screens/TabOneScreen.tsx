import React, { useEffect, useState } from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../../types';
import ItemInput from '../components/ItemInput';
import SplitOutput from '../containers/SplitOutput';
import FriendInput, { Friend } from '../components/FriendInput';
import FriendModel from '../components/FriendModal';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [ bill, setBill ] = useState('0.00');
  const [ tip, setTip ] = useState('10');
  const [ split, setSplit ] = useState(2);
  const [ splitTotal, setSplitTotal ] = useState('0.00');
  const [ name, setName ] = useState('');
  const [ friends, updateFriends ] = useState<Friend[]>([]);
  const [ numberOfFriends, setNumberOfFriends ] = useState();

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
        <ItemInput 
          label='Enter Item: '
          amount={bill}
          placeholderText='$0'
          handleTextChange={handleBillChange}
          /> 
        <ItemInput 
          label='Tip(%): '
          amount={tip}
          placeholderText='0%'
          handleTextChange={handleTipChange}
          />
        <SplitOutput
          split={split}
          splitTotal={splitTotal}
          handleSplitAdd={handleSplitAdd}
          handleSplitRemove={handleSplitRemove}
          />
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
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
