import React from "react"
import { Image, SafeAreaView, Text, View } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import { useDispatch } from "react-redux"
import tw from "tailwind-react-native-classnames"
import NavOptions from "../components/NavOptions"
import env from "../config/env"
import { setDestination, setOrigin } from "../../app/slices/navSlice"
import NavFavorite from "../components/NavFavorite/Index"

export default HomeScreen = () => {
    console.log("env", env.GOOGLE_API);
    const dispatch = useDispatch()

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5 `}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain'
                    }}
                    source={{ uri: `https://links.papareact.com/gzs` }}
                />
                <GooglePlacesAutocomplete
                    placeholder='Where from...'
                    styles={{
                        container: {
                            flex: 0,
                            borderColor: 'gray',
                        },
                        textInput: {
                            fontSize: 18,
                            borderColor: "black",
                        },
                    }}
                    enablePoweredByContainer={false}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        dispatch(setOrigin({
                            location: details?.geometry?.location,
                            description: data?.description
                        }))

                        dispatch(setDestination(null))
                        // console.log("the data", data);
                        // console.log("the details", details)

                    }}
                    query={{
                        key: env.GOOGLE_API,
                        language: 'en',
                    }}
                />

                <NavOptions />
                <NavFavorite />
            </View>
        </SafeAreaView>
    )
}