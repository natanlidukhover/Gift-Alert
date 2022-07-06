import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { cart } from '../redux/actions/countAction';


export default function TopBar() {
  const dispatch = useDispatch();
 
  const count = useSelector((store) => store.count.count);
 
  const handleCart = () => {
      dispatch(cart());
  };

  return (    
    <View style={{height: 100, backgroundColor: 'powderblue', flexDirection: 'row', flex:1}}>   
        <View style={{flex:0.25, backgroundColor: 'black'}}> 
          <Image source={require('../../assets/presentWhite.png')}style = {styles.image}/>
        </View>
        <View style={{flex:0.5,  backgroundColor: 'black'}}>  
          <Text style={styles.RecommendationsForText}>Recommendations For Contact</Text>
        </View>
        <TouchableOpacity style={{flex:0.25, backgroundColor: 'black'}} onPress = {handleCart}> 
          <Image source={require('../../assets/whiteCartIcon.png')}style = {styles.image}/>
        </TouchableOpacity>
    </View>    
  );
}

const styles = StyleSheet.create({
  RecommendationsForText: {
    marginTop:40,
    textAlign: 'center',
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily:"Avenir-BlackOblique",
  },
  image:{
    marginTop:50,
    flex:0.6,
    width: undefined,
    height: undefined,
    resizeMode: 'contain'
  },
});