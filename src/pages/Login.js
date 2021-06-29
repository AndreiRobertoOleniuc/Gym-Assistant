import React,{useEffect,useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} placeholder="Email"/>
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true}/>
            <Text style={styles.forgot}>Forgot Password ?</Text>
            <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.or}>Or</Text>
            <TouchableOpacity style={styles.create}>
                <Text style={styles.text}>Create an Account</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        backgroundColor:"#000000",
        padding:30,
        fontFamily:"nunito-regular",
    },
    title:{
        color:"#ffffff",
        fontSize:40,
        fontFamily:"nunito-bold",
        marginTop:80,
        marginBottom:60,
    },
    input:{
        height:55,
        width:320,
        borderRadius:30,
        backgroundColor:"#171717",
        padding:15,
        marginBottom:10,
        color:"white",
        fontFamily:"nunito-regular",
        fontSize:20,
        marginTop:15,
    }, 
    forgot:{
        color:"#353535",
        fontSize:13,
        alignSelf:"flex-end",
        fontFamily:"nunito-regular",
    },
    login:{
        height:50,
        width:320,
        borderRadius:30,
        backgroundColor:"#C7ED39",
        padding:12,
        marginTop:10,
        marginBottom:10,
        alignItems:"center",
        justifyContent:"center",
        marginTop:150,
    },
    create:{
        height:50,
        width:320,
        borderRadius:30,
        backgroundColor:"#FFFFFF",
        padding:12,
        marginTop:10,
        marginBottom:10,
        alignItems:"center",
        justifyContent:"center",
    },
    text:{
        fontSize:17,
        fontFamily:"nunito-bold",
    },
    or:{
        color:"#353535",
        fontSize:16,
        fontFamily:"nunito-regular",
    }
})

export default Login;
