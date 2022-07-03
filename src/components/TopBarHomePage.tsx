import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert,Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { search_gifts, giftees, third } from '../redux/actions/countAction';
import GifteePage from '../demos/GifteePage';
import Checkbox from '../demos/Checkbox';
import { Provider } from 'react-redux';


 
export default function TopBar() {
    
  return (    
    <View style={{height: 100, backgroundColor: 'powderblue', flexDirection: 'row', flex:1}}>   
        <View style={{flex:0.25, backgroundColor: 'black'}}> 
          <Image source={require('../../assets/presentWhite.png')}style = {styles.image}/>
        </View>
        <View style={{flex:0.5,  backgroundColor: 'black'}}>  
          <Text style={styles.RecommendationsForText}>Recommendations For Contact</Text>
        </View>
        <View style={{flex:0.25, backgroundColor: 'black'}}> 
          <Image source={require('../../assets/whiteCartIcon.png')}style = {styles.image}/>
        </View>
    </View>    
  );
}


const styles = StyleSheet.create({
  

  RecommendationsForText: {
    marginTop:40,
    textAlign: 'center',
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily:"Avenir-BlackOblique",
  },
 
  image:{
    marginTop:50,
    flex:0.6,
    width: undefined,
    height: undefined,
    resizeMode: 'contain'
  },


  
});