import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { contact_selected } from "../redux/actions/countAction";
import BottomNav from "../components/BottomNav";
import TopBar from "../components/TopBarHomePage";

export default function ContactsPage() {
  var rows = [];
  var numrows = 30;
  for (var i = 0; i < numrows; i++) {
    rows.push(<Giftee />);
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <TopBar></TopBar>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.headerText}>Contacts</Text>
        {rows}
      </ScrollView>
      <BottomNav></BottomNav>
    </View>
  );
}

const Giftee = () => {
  const dispatch = useDispatch();

  const count = useSelector((store) => store.count.count);

  const handleContactSelected = () => {
    dispatch(contact_selected());
  };
  return (
    <TouchableOpacity
      style={styles.bottomBorder}
      onPress={handleContactSelected}
    >
      <Text style={styles.contactsTextStyle}>Contact_Name</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "black",
    height: 500,
  },
  text: {
    fontSize: 42,
  },

  innerTextStyle: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Avenir-BlackOblique",
  },
  contactsTextStyle: {
    textAlign: "left",
    fontSize: 20,
    fontFamily: "Avenir-BlackOblique",
    color: "#FFFFFF",
  },

  headerText: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 48,
    fontFamily: "Avenir-BlackOblique",
  },
  bottomBorder: {
    margin: 5,
    borderBottomWidth: 1,
    borderBottomColor: "FFFFFF",
  },
});
