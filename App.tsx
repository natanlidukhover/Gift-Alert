import React, { useState } from "react";
import { View, StyleSheet, Text, Button, Alert} from "react-native";

const HomePage = () => {
  return (
    <View style={styles.baseContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.giftAlertText}>Gift Alert</Text>
        <Text 
          style={styles.topButton}
          onPress={() => Alert.alert('Top pressed')}
          >Top</Text>
        <Text 
          style={styles.middleButton}
          onPress={() => Alert.alert('Middle pressed')}
        >Middle</Text>
       <Text 
          style={styles.topButton}
          onPress={() => Alert.alert('Bottom pressed')}
        >Bottom</Text>
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
    marginBottom: 400
  },

  bottomContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 20,
  },


  giftAlertText: {
    marginTop: 80,
    textAlign: 'center',
    color: "#FAC577",
    fontSize: 48,
    fontFamily:"Avenir-BlackOblique",

  },
  topButton: {
    flex: 0.3,
    backgroundColor: "#FAC577",
    borderWidth: 1,
    margin:10,
    textAlign: "center",
  },
  middleButton: {
    flex: 0.3,
    backgroundColor: "#FAC577",
    borderWidth: 1,
    margin:10,
    textAlign: "center"
  },
  bottomButton: {
    flex: 0.3,
    backgroundColor: "#FAC577",
    borderWidth: 1,
    margin:10,
    textAlign: "center"
  },

});


export default HomePage;