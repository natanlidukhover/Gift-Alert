import React from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import TopBar from './components/TopBarHomePage';
import BottomNav from './components/BottomNav';
import ProductView from './components/ProductView';
import Contacts from './pages/ContactsPage';
import SettingsPage from './pages/SettingsPage';
import CartPage from './pages/CartPage';
import ContactSelectedPage from './pages/ContactSelectedPage';
 
export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.count.count); 

  if (count == 25){
    return (<Contacts/>);
  }

  if (count == 50){
    return (<SettingsPage/>);
  }

  if(count == 75 ){
    return (<ContactSelectedPage/>);
  }

  if (count == 100){
    return (<CartPage/>);
  }

  return (
    <View style={{flex: 1,flexDirection: 'column',justifyContent: 'space-between',}}>
        <TopBar></TopBar>
        <ProductView></ProductView>
        <BottomNav></BottomNav>
    </View>    
  );
}
