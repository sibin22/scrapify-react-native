

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Header from './Header';
import Home from './Home';
import BottomNavbar from './BottomNav';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OtpVerify from './OtpVerify';
import LoginCard from './LoginCard';
import OtpSuccess from './OtpSuccess';
import RegisterModal from './RegisterModal';
import ConfirmPickup from './ConfirmPickup';
import HeaderNav from './HeaderNav';
import Profile from './Profile';
import ProductSelect from './Pages/ProductSelect';
import ReviewProduct from './Pages/ReviewProduct';
 

const Stack=createNativeStackNavigator();
const {Navigator,Screen}=Stack



const MyStack = () => {
 return (
 
    <NavigationContainer>
      <Navigator  initialRouteName='headerNav' screenOptions={{
         headerShown: false}}>

      <Screen name="headerNav" component={HeaderNav}/>
      <Screen name="header" component={Header}/>
      <Screen name="home" component={Home}/>
      <Screen name="OtpVerify" component={OtpVerify}/>
      <Screen name="OtpSuccess"  component={OtpSuccess}/>
      <Screen name="BottomNavbar"  component={BottomNavbar}/>
      <Screen name="RegisterModal"  component={RegisterModal}/>
      <Screen name="ConfirmPickup"  component={ConfirmPickup}/>
      <Screen name="Profile" component={Profile}/>
      <Screen name="ProductSelect" component={ProductSelect}/>
      <Screen name="ReviewProduct" component={ReviewProduct}/>
      
      </Navigator>
      </NavigationContainer>

      
       );
}





const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default MyStack;
