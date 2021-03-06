import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { useSelector } from 'react-redux'
import "intl"
import "intl/locale-data/jsonp/en"
import tw from 'tailwind-react-native-classnames'
import { selectTravelTimeInformation } from '../../../app/slices/navSlice'

const data = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1,
        image: "https://links.papareact.com/3pn"
    },
    {
        id: "Uber-X-456",
        title: "Uber XL",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8"
    },
    {
        id: "Uber-LUX-789",
        title: "Uber LUX",
        multiplier: 1,
        image: "https://links.papareact.com/7pf"
    }
]

const SURGE_CHANGE_RATE = 1.5;

const RideOptionCard = () => {
    const navigator = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            {/* <View> */}
            <TouchableOpacity onPress={() => navigator.navigate('NavigateCard')}
                style={[tw` top-3 absolute left-5 p-3 rounded-full`, { zIndex: 1 }]}>
                <Icon name="chevron-left" type="fontawesome" />
            </TouchableOpacity>
            <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => setSelected(item)}
                        style={tw`flex-row items-center justify-between px-10 ${item.id === selected?.id && "bg-gray-200"}`}>
                        <Image style={{ width: 100, height: 100, resizeMode: "contain" }}
                            source={{ uri: item.image }}
                        />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
                            <Text> {travelTimeInformation?.duration?.text} Travel Time</Text>
                        </View>
                        <Text style={tw`text-xl`}>
                            {new Intl.NumberFormat('en-gb', {
                                style: 'currency',
                                currency: 'GBP',
                            }).format(
                                (travelTimeInformation?.duration?.value * SURGE_CHANGE_RATE * item.multiplier) / 100
                            )}
                        </Text>
                    </TouchableOpacity>
                )}
            />
            {/* </View> */}
            <View style={tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
                    <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionCard
