import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { contacts, home, settings } from "../redux/actions/countAction";

export default function BottomNav() {
  const dispatch = useDispatch();

  const count = useSelector((store) => store.count.count);

  const handleContacts = () => {
    dispatch(contacts());
  };

  const handleHome = () => {
    dispatch(home());
  };

  const handleSettings = () => {
    dispatch(settings());
  };

  return (
    <View
      style={{ backgroundColor: "powderblue", flexDirection: "row", flex: 1 }}
    >
      <TouchableOpacity
        style={{ flex: 1 / 3, backgroundColor: "black" }}
        onPress={handleSettings}
      >
        <Image
          source={require("../../assets/settings.png")}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flex: 1 / 3, backgroundColor: "black" }}
        onPress={handleHome}
      >
        <Image source={require("../../assets/home.png")} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flex: 1 / 3, backgroundColor: "black" }}
        onPress={handleContacts}
      >
        <Image
          source={require("../../assets/contacts.png")}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  RecommendationsForText: {
    marginTop: 40,
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Avenir-BlackOblique",
  },

  image: {
    marginTop: 20,
    flex: 0.6,
    width: undefined,
    height: undefined,
    resizeMode: "contain",
  },
});
