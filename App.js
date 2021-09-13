import React from 'react';
import 'react-native-gesture-handler'
import { Provider } from "react-redux"
import { StatusBar, StyleSheet, Platform, View, KeyboardAvoidingView } from 'react-native';
import { store } from './app/store';
import Navigation from "./src/navigation/index"
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
      >

        <Navigation>

        </Navigation>
      </KeyboardAvoidingView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
