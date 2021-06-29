import React,{useState} from 'react';
import Login from "./pages/Login";
import * as Font from "expo-font"

const getFonts = ()=> Font.loadAsync({
    'nunito-regular':require(`./assets/fonts/Nunito-Regular.ttf`),
    'nunito-bold':require(`./assets/fonts/Nunito-SemiBold.ttf`)
});

export default function App() {
  React.useEffect(()=>{
    getFonts();
  },[])
  return <Login/>
}

