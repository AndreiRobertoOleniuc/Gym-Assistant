import React,{useState} from 'react';
import Login from "./Login";
import * as Font from "expo-font"
import {AppLoading} from "expo";

const getFonts = ()=> Font.loadAsync({
    'nunito-regular':require(`../assets/fonts/Nunito-Regular.ttf`),
    'nunito-bold':require(`../assets/fonts/Nunito-SemiBold.ttf`)
});

export default function App() {
  React.useEffect(()=>{
    getFonts();
  },[])
  return <Login/>
}

