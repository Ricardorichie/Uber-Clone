import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import MapScreen from '../screens/MapScreen'
import { createStackNavigator } from "@react-navigation/stack"
import { SafeAreaProvider } from "react-native-safe-area-context"
import EatsScreen from '../screens/EatsScreen'

export default function index() {
    const Stack = createStackNavigator()
    return (
        <NavigationContainer>

            <SafeAreaProvider>
                <Stack.Navigator initialRouteName={"HomeScreen"}>
                    <Stack.Screen options={{ headerShown: false }} name={'HomeScreen'} component={HomeScreen} />
                    <Stack.Screen options={{ headerShown: false }} name={'EatsScreen'} component={EatsScreen} />
                    <Stack.Screen options={{ headerShown: false }} name={'MapScreen'} component={MapScreen} />
                </Stack.Navigator>
                {/* <HomeScreen /> */}

            </SafeAreaProvider>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
