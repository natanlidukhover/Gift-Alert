import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function ProductView() {
  return (
    // have to have margin or sizing is different between pages
    // need to investigate why and find a better solution
    <View
      style={{
        flex: 4,
        backgroundColor: "black",
        flexDirection: "column",
      }}
    >
      <View style={{ flex: 3 / 4, backgroundColor: "black" }}>
        <Image source={require("../../assets/nerf.png")} style={styles.image} />
      </View>
      <Text style={styles.Text}> Its nerf or nothin -- $2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 48,
    fontFamily: "Avenir-BlackOblique",
  },

  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "contain",
  },
});
