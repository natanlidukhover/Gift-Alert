import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Alert } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useDispatch, useSelector } from 'react-redux';
import { return_home } from '../redux/actions/countAction';


const App = () => {

  // ok so will modify this to read names + num of giftees attached to user
  var rows = [];
  var numrows = 30;
  for (var i = 0; i < numrows; i++) {
    rows.push(<Giftee/>);
  }
  const dispatch = useDispatch();
 
  const count = useSelector((store) => store.count.count);
 
  const handleReturn_Home = () => {
    dispatch(return_home());
  };

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView style={styles.scrollView}>   
        <Text style={styles.headerText}>Contacts</Text>
        <View style={styles.roundedBorderReturnHome}>
          <Text style={styles.innerTextStyle} onPress= {handleReturn_Home}>Return Home</Text>
        </View>
      
        {rows}
      </ScrollView>
    </SafeAreaView>
  );
}

const Giftee = () => {

  // Have this navigate to somewhere elsse
  const dispatch = useDispatch();
 
  const count = useSelector((store) => store.count.count);
 
  const handleReturn_Home = () => {
    dispatch(return_home());
  };

  return (
        <View style={styles.bottomBorder}><Text style={styles.contactsTextStyle} onPress= {handleReturn_Home}>Contact</Text></View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor:"#000000"
  },
  scrollView: {
    backgroundColor: "#663399",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  roundedBorder:{
    marginBottom:10,
    marginTop:10,
    marginHorizontal: 50,
    backgroundColor: "#FFFFFF",
    borderWidth: 1, 
    borderRadius: 10,
    padding: 15,
  },
  roundedBorderReturnHome:{
    margin:15,
    backgroundColor: "#FFFFFF",
    borderWidth: 1, 
    borderRadius: 10,
    padding: 15,
  },
  innerTextStyle:{
    textAlign: "center",
    fontSize: 20,
    fontFamily:"Avenir-BlackOblique",
  },
  contactsTextStyle:{
    textAlign: "left",
    fontSize: 20,
    fontFamily:"Avenir-BlackOblique",
    color: "#FFFFFF",
  
  
  },

  headerText: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    color: "#FFFFFF",
    fontSize: 48,
    fontFamily:"Avenir-BlackOblique",

  },
  bottomBorder:{
    margin:5,
    borderBottomWidth: 1,
    borderBottomColor: "FFFFFF"
  }

});

export default App;