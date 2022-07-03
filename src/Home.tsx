import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert,Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { search_gifts, giftees, third } from './redux/actions/countAction';
import { Provider } from 'react-redux';
import TopBar from './components/TopBarHomePage';


 
export default function Home() {
    

  return (
    <View style={{flex: 1,flexDirection: 'column',justifyContent: 'space-between',}}>
        <TopBar></TopBar>
        <View style={{height: 600, backgroundColor: 'skyblue'}} />
        <View style={{height: 100, backgroundColor: 'steelblue'}} />
      </View>
  );
}
