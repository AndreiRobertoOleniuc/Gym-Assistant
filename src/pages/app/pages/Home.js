import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
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
})

export default Home;
