import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import MapComponent from '../components/Map'
import { createStackNavigator } from "@react-navigation/stack"
import NavigateCard from '../components/NavigateCard'
import RideOptionCard from '../components/RideOptionCard'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
const MapScreen = () => {
    const Stack = createStackNavigator();
    const navigation = useNavigation()
    return (
        <View>
            {/* <Text>Here is the map stuff...</Text> */}
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={tw`bg-gray-100 absolute top-10 left-5 z-50 p-3 rounded-full shadow-lg`}>
                <Icon name="menu" />
            </TouchableOpacity>
            <View style={tw`h-1/2`}>
                <MapComponent />
            </View>
            <View style={tw`h-1/2`}>
                <Stack.Navigator initialRouteName="NavigateCard">
                    <Stack.Screen
                        name="NavigateCard"
                        component={NavigateCard}
                        options={{
                            headerShown: false
                        }}

                    />
                    <Stack.Screen
                        name="RideOptionCard"
                        component={RideOptionCard}
                        options={{
                            headerShown: false
                        }}

                    />

                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen