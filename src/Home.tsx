import React from "react";
import { View, StyleSheet, Text, Alert, Image} from "react-native";
import { Auth } from 'aws-amplify';

const Home = () => {
  const signOut = async () => {
    try {
      await Auth.signOut({ global: true });
    } catch (error) {
      console.log('[ERROR] Failed to sign out: ', error);
    }
  };

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
            onPress={() => Alert.alert('Giftees pressed')}
            >Giftees</Text>
        </View>

        <View style={styles.roundedBorder}>
          <Text 
            style={styles.innerTextStyle}
            onPress={() => Alert.alert('Search Gifts pressed')}
            >Search Gifts</Text>
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
    padding: 20,
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

export default Home;