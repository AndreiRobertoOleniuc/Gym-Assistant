import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from "expo-font";
import Login from "./pages/Login";
import Home from "./pages/app/Container";

const Stack = createStackNavigator();

const getFonts = ()=> Font.loadAsync({
    'nunito-regular':require(`./assets/fonts/Nunito-Regular.ttf`),
    'nunito-bold':require(`./assets/fonts/Nunito-SemiBold.ttf`)
});

//Icons https://icons.expo.fyi/

export default function App() {
  useEffect(()=>{
    getFonts();
  },[])
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Login" >
              {props => <Login {...props} />}
            </Stack.Screen>
            <Stack.Screen name="Home" >
              {props => <Home {...props} />}
            </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

