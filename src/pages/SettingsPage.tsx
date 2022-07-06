import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import BottomNav from '../components/BottomNav';
import TopBar from '../components/TopBarHomePage';

 
export default function SettingsPage() {
  return (
    <View style={{flex: 1,flexDirection: 'column',justifyContent: 'space-between',}}>
        <TopBar></TopBar>
        <Text style={styles.Text}>Settings Page</Text>
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