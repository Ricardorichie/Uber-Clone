import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import env from "../../config/env";
import { useDispatch } from "react-redux";
import { setDestination } from "../../../app/slices/navSlice";
import { DrawerActions } from "@react-navigation/routers";
import { useNavigation, useNavigationState } from "@react-navigation/core";
import NavFavorite from "../NavFavorite/Index";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
const NavigateCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    return (
        <SafeAreaView style={tw`bg-white flex-1`} >
            <Text style={tw`text-center py-5 text-xl`}>Hey, Good Morning</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>

                    <GooglePlacesAutocomplete
                        fetchDetails={true}
                        placeholder='Where to?'
                        returnKeyType={'search'}
                        debounce={400}
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details?.geometry?.location,
                                description: data?.description
                            }))
                            navigation.navigate('RideOptionCard')
                        }}
                        nearbyPlacesAPI='GooglePlacesSearch'
                        styles={toInputBoxStyles}
                        query={{
                            key: env.GOOGLE_API,
                            language: 'en'
                        }}
                    />
                </View>
                <NavFavorite />
                <View style={tw` flex-row bg-white justify-evenly mt-auto py-2 border-t border-gray-100`}>
                    <TouchableOpacity onPress={() => {

                        navigation.navigate('RideOptionCard')
                    }} style={tw`flex flex-row w-24 px-4 py-3 bg-black rounded-full`}>

                        <Icon name="car" type="font-awesome" color="white" size={16} />
                        <Text style={tw`text-white text-center ml-2`}>Rides</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={tw`flex flex-row w-24 px-4 ml-5 py-3 rounded-full`}>

                        <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
                        <Text style={tw` text-center ml-2`}>Eats</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0
    }, textInput: {
        backgroundColor: "#E8E8E8",
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})