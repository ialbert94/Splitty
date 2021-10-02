import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../Themed';

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  textOutput: {
    fontSize: 30,
    color: '#ffffff',
  },
});

export default function SplitTotal({ splitTotal }: { splitTotal : string }) {
  return (
    <View>
      <Text style={styles.textHeader}>Split total</Text>
      <Text style={styles.textOutput}>{splitTotal}</Text>
    </View>
  );
};
