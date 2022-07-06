import React, { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import BottomNav from '../components/BottomNav';
import TopBar from '../components/TopBarHomePage';
import Checkbox from '../components/Checkbox';

 
export default function ContactSelectedPage() {
  return (
    <View style={{flex: 1,flexDirection: 'column',justifyContent: 'space-between',}}>
        <TopBar></TopBar>
        <Checkbox></Checkbox>
        <BottomNav></BottomNav>
    </View>
  );
}
const styles = StyleSheet.create({
    Text: {
      marginTop:40,
      height:600,
      textAlign: 'center',
      color: "black",
      fontSize: 50,
      fontFamily:"Avenir-BlackOblique",
    },
  });