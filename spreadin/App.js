import React from 'react';
import { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from './assets/logo.png';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={{color : 'white', fontSize : 24}}>Spreadin</Text>
        {/* <Text style={{color : 'white'}}>Aditional text here</Text> */}
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
});
