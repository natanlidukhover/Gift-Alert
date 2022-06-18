import React, { useState } from "react";
import { View, StyleSheet, Text, Button, Alert, Image} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const HomePage = () => {
  return (
    <View style={styles.baseContainer}>

      <View style={styles.topContainer}>
        <Text style={styles.giftAlertText}>Gift Alert</Text>
        <View style={styles.roundedBorder}>
          <Text 
            style={styles.innerTextStyle}
            onPress={() => Alert.alert('My Profile pressed')}
            >My Profile</Text>
        </View>
        <View style={styles.roundedBorder}>
          <Text 
            style={styles.innerTextStyle}
            onPress={() => Alert.alert('Add New Giftee pressed')}
            >Add New Giftee</Text>
        </View>
        <View style={styles.roundedBorder}>
          <Text 
            style={styles.innerTextStyle}
            onPress={() => Alert.alert('View Existing Giftee pressed')}
            >View Existing Giftee</Text>
        </View>

      </View>

      <View style={styles.bottomContainer}> 
        <Text style={styles.giftAlertText}>Gift Up</Text>
        <Image 
        source={require('./assets/present.png')}
        style = {styles.image}/>
        
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
    padding: 20,
    //marginBottom: 400
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
    color: "#FAC577",
    fontSize: 48,
    fontFamily:"Avenir-BlackOblique",
  },

  getGiftinText: {
    textAlign: 'center',
    color: "#FAC577",
    fontSize: 48,
    fontFamily:"Avenir-BlackOblique",
  },

  image:{
    resizeMode: 'contain',
    alignSelf: 'center',
  },


  textButton: {
    flex: 0.3,
    backgroundColor: "#FAC577",
    borderWidth: 1,
    margin:10,
    textAlign: "center",
    fontSize: 20,
    fontFamily:"Avenir-BlackOblique",
  },

  roundedBorder:{
      margin:10,
      backgroundColor: "#FAC577",
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


export default HomePage;