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

  // <ScrollView style={styles.scrollView}>
  // <Text style={styles.headerText}>Contacts</Text>
  // {rows}
  // </ScrollView>
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <TopBar></TopBar>
      <View style={styles.scrollViewParent}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={styles.headerText}>Contacts</Text>
          {rows}
        </ScrollView>
      </View>
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
    flex: 1,
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
  scrollViewParent: {
    flex: 4
  }
});
