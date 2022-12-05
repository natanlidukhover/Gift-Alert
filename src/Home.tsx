import React from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import TopBar from "./components/TopBarHomePage";
import BottomNav from "./components/BottomNav";
import ProductView from "./components/ProductView";
import Contacts from "./pages/ContactsPage";
import SettingsPage from "./pages/SettingsPage";
import CartPage from "./pages/CartPage";
import ContactSelectedPage from "./pages/ContactSelectedPage";

export default function Home() {
  const dispatch = useDispatch();
  const pageId = useSelector((store) => store.count.pageId);

  if (pageId == 25) {
    return <Contacts />;
  }

  if (pageId == 50) {
    return <SettingsPage />;
  }

  if (pageId == 75) {
    return <ContactSelectedPage />;
  }

  if (pageId == 100) {
    return <CartPage />;
  }

  return (
    <View
      style={{
        flex: 5,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <TopBar></TopBar>
      <ProductView></ProductView>
      <BottomNav></BottomNav>
    </View>
  );
}
