import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import tw from 'tailwind-react-native-classnames'

const NavFavorite = () => {
    const data = [
        {
            id: '123',
            icon: 'home',
            location: 'Home',
            destination: 'Code Street, London, Uk'
        },
        {
            id: "456",
            icon: 'briefcase',
            location: "Work",
            destination: "London Eye, London, UK"
        },

    ]
    return (
        <FlatList data={data} keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
            )}
            renderItem={({ item }) => (
                <TouchableOpacity style={tw`flex-row items-center p-5`}>
                    <Icon style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                        name={item.icon}
                        type='ionicon'
                        color="white"
                        size={18}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
                        <Text style={tw`text-gray-500`}>{item.destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />

    )
}

export default NavFavorite
