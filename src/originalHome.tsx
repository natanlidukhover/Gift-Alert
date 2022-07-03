import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert,Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { search_gifts, giftees, third } from './redux/actions/countAction';
import GifteePage from './demos/GifteePage';
import Checkbox from './demos/Checkbox';
import { Provider } from 'react-redux';


 
export default function Home() {
    const dispatch = useDispatch();
 
    const count = useSelector((store) => store.count.count);
 
    const handleSearch_Gifts = () => {
        dispatch(search_gifts());
    };
 
    const handleGiftees = () => {
        //Implement like handle search gifts later
    };

    const handleThird = () => {
        //Implement like handle search gifts later
    };

 
  if (count == 1){
    return (<GifteePage />);
  }

  // The next two are just returning bogus rn
  if (count == 5){
    return (<Checkbox />);
  }

  if (count == 10){
    return (<GifteePage />);
  }

  return (
    <View style={styles.baseContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.giftAlertText}>Gift Alert {count}</Text>
    
        <View style={styles.roundedBorder}>
          <Text 
            style={styles.innerTextStyle}
            onPress= {handleSearch_Gifts}
            >Contacts</Text>
        </View>

        <View style={styles.roundedBorder}>
          <Text 
            style={styles.innerTextStyle}
            onPress= {handleGiftees}
            >Option2</Text>
        </View>

        <View style={styles.roundedBorder}>
          <Text 
            style={styles.innerTextStyle}
            onPress= {handleThird}
            >Third</Text>
        </View>
        
      </View>

      <View style={styles.bottomContainer}> 
        <Text style={styles.giftAlertText}>Gift Up</Text>
        <Image 
        source={require('../assets/present.png')}
        style = {styles.image}/>
      </View>

      <View style={styles.roundedBorder}>
        <Text
          style={styles.innerTextStyle}
          onPress={() => signOut()}
        >Sign Out</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    baseContainer: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: "#663399",
    },
  
    topContainer: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      paddingTop: 20,
      paddingHorizontal:40
  
    },
  
    bottomContainer: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      marginBottom:30
    },
  
    giftAlertText: {
      marginTop: 80,
      textAlign: 'center',
      color: "#FFFFFF",
      fontSize: 48,
      fontFamily:"Avenir-BlackOblique",
    },
   
    image:{
      resizeMode: 'contain',
      alignSelf: 'center',
    },
  
    textButton: {
      flex: 0.3,
      backgroundColor: "#FFFFFF",
      borderWidth: 1,
      margin:10,
      textAlign: "center",
      fontSize: 20,
      fontFamily:"Avenir-BlackOblique",
    },
  
    roundedBorder:{
        margin:10,
        backgroundColor: "#FFFFFF",
        borderWidth: 1, 
        borderRadius: 10,
        padding: 5,

    },
  
    innerTextStyle:{
        textAlign: "center",
        fontSize: 20,
        fontFamily:"Avenir-BlackOblique",
    }
  });