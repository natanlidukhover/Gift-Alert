import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { SafeAreaView, StyleSheet, StatusBar, ScrollView } from "react-native";

const App = () => {
  let bouncyCheckboxRef: BouncyCheckbox | null = null;
  const [checkboxState, setCheckboxState] = React.useState(false);
  var rows = [];
  var numrows = 30;
  for (var i = 0; i < numrows; i++) {
    rows.push(<Checkbox />);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>{rows}</ScrollView>
    </SafeAreaView>
  );
};

const Checkbox = () => {
  let bouncyCheckboxRef: BouncyCheckbox | null = null;
  const [checkboxState, setCheckboxState] = React.useState(false);
  return (
    <BouncyCheckbox
      style={{ marginTop: 16 }}
      ref={(ref: any) => (bouncyCheckboxRef = ref)}
      isChecked={checkboxState}
      text="Generic Interest"
      textStyle={{ color: "#FAC577", fontSize: 20 }}
      disableBuiltInState
      onPress={() => setCheckboxState(!checkboxState)}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 600,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#663399",
  },
  scrollView: {
    backgroundColor: "#663399",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  roundedBorder: {
    margin: 10,
    backgroundColor: "#FAC577",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
  },
  innerTextStyle: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Avenir-BlackOblique",
  },
});

export default App;
