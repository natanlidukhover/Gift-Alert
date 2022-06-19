import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, View, Alert } from 'react-native';


const App = () => {

  // ok so will modify this to read names + num of giftees attached to user
  var rows = [];
  var numrows = 30;
  for (var i = 0; i < numrows; i++) {
    rows.push(<Giftee/>);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>   
      {rows}
      </ScrollView>
    </SafeAreaView>
  );
}

const Giftee = () => {
  return (
    <View style={styles.roundedBorder}>
          <Text 
            style={styles.innerTextStyle}
            onPress={() => Alert.alert('Friend Profile')}
            >Giftee</Text>
    </View>
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
    margin:10,
    backgroundColor: "#FAC577",
    borderWidth: 1, 
    borderRadius: 10,
    padding: 15,
  },
  innerTextStyle:{
    textAlign: "center",
    fontSize: 20,
    fontFamily:"Avenir-BlackOblique",
  }

});

export default App;