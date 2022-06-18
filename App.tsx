import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

const ViewStyleProps = () => {
    const [isHome, setIsHome] = useState(true);
    return (
      <View style={styles.container}>
        <View style={styles.top} />
        <View style={styles.middle} />
        <Text>
        This is 
      </Text>
        <View style={styles.bottom} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
  },
  top: {
    flex: 0.3,
    backgroundColor: "grey",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    flex: 0.3,
    backgroundColor: "beige",
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: "pink",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default ViewStyleProps;