import React, { useState } from "react";
import { Button, Text, View,Image } from "react-native";

const Page = (props: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  const [isHome, setIsHome] = useState(true);

  return (
    <View>
     
      <Text>
        This is {props.name} {isHome ? "home" : "not home"}!
      </Text>
      <Button
        onPress={() => {
          setIsHome(false);
        }}
        disabled={!isHome}
        title={isHome ? "Change page" : "Page Changed"}
      />
    </View>
  );
}

const PageSystem = () => {
  return (
    <>
      <Page name="Page" />
    </>
  );
}

export default PageSystem;