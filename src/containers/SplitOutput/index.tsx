import React from 'react';
import { StyleSheet } from "react-native";

import SplitCount from '../../components/SplitCount';
import SplitTotal from '../../components/SplitTotal';
import { View } from '../../components/Themed';

const styles = StyleSheet.create({
    sectionOutput: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#192E7A',
      borderRadius: 10,
      paddingVertical: 40,
      paddingHorizontal: 20,
    },
  });

interface SplitOutputProps {
    split: number,
    handleSplitAdd: any
    handleSplitRemove: any,
    splitTotal: string
}

export default function SplitOutput ({ split, handleSplitAdd, handleSplitRemove, splitTotal} : SplitOutputProps ) {
  return (
    <View style={styles.sectionOutput}>
      <SplitCount
        split={split}
        handleSplitAdd={handleSplitAdd}
        handleSplitRemove={handleSplitRemove}
      />
      <SplitTotal splitTotal={splitTotal} />
    </View>
  );
}