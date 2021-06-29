import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./pages/Home";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Container = () => {
    return (
        <Tab.Navigator
            inactiveColor="#404040"
            activeBackgroundColor="#282828"
            inactiveBackgroundColor="#282828"
            style={{ backgroundColor: '#282828' }}
            tabBarOptions={{
            style:{
                backgroundColor: '#000000'
            }
        }}>
            <Tab.Screen 
            name="Home"
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }}
            component={Home} 
        />
        </Tab.Navigator>
    );
}

export default Container;
