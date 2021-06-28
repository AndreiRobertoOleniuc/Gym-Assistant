import React,{useEffect,useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
import * as Font from "expo-font"

const getFonts = ()=> Font.loadAsync({
    'nunito-regular':require(`../assets/fonts/Nunito-Regular.ttf`),
    'nunito-bold':require(`../assets/fonts/Nunito-SemiBold.ttf`)
});

const Login = () => {
    const[fontsLoaded,setFontsLoaded] = useState(false);

    if(fontsLoaded)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        backgroundColor:"#000000",
    },
    title:{
        color:"#ffffff",
        fontSize:36,
    }
})

export default Login;
