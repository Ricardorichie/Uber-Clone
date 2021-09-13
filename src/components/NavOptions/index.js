import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import tw from "tailwind-react-native-classnames"
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/core'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../../../app/slices/navSlice'

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        Screen: "MapScreen",
    }, {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        Screen: "EatsScreen"
    }
]

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => {
                return item.id
            }}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity
                        disabled={!origin}
                        onPress={() => navigation.navigate(item.Screen)} style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-3 w-40`}>
                        <View style={tw`${!origin && 'opacity-50'}`}>
                            <Image
                                style={{ width: 120, height: 120, resizeMode: "contain" }}
                                source={{
                                    uri: item.image
                                }}
                            />
                            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                            <Icon
                                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                                type='antdesign'
                                name='arrowright'
                                color='white'
                            />
                        </View>
                    </TouchableOpacity>)
            }}

        />
    )
}

export default NavOptions
