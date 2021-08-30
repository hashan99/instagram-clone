import React from 'react';
import { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import logo from './assets/logo.png';

export default class App extends React.Component {

  state = {
    value : 0
  }

  addValue = () => {
    this.setState({value : this.state.value +10})
  }

  subValue = () => {
    this.setState({value : this.state.value -10})
  }

  resetValue = () => {
    this.setState({value : 0})
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>Spreadin</Text>

        <Image source={logo} style={styles.logo} />

        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}> 
          
          <TouchableOpacity style={styles.operator} onPress={() => this.subValue()}>
            <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}> - </Text>
          </TouchableOpacity>

          <Text style={(this.state.value == 0) ? {color: 'white', fontSize: 16, fontWeight: 'bold'} : {color: '#008b8b', fontSize: 16, fontWeight: 'bold'}}> {this.state.value} </Text>

          <TouchableOpacity style={styles.operator} onPress={() => this.addValue()}>
            <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}> + </Text>
          </TouchableOpacity>

        </View>

        {
          (this.state.value == 0)
          ?
          <Text style={{color: 'white', fontSize: 16}}>You can increment or decrement the value!</Text>
          :
          <TouchableOpacity style={styles.button} onPress={() => this.resetValue()}>
          <Text style={{color: 'white', fontSize: 16}}>Reset to Zero</Text>
        </TouchableOpacity>
        }

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
    margin: 12,
  },
  button: {
    backgroundColor: '#008b8b', 
    paddingHorizontal: 20, 
    paddingVertical: 10, 
    borderRadius: 10, 
    justifyContent: 'center', 
    alignItems: 'center', 
    margin: 12,
  },
  operator: {
    backgroundColor: 'white', 
    paddingVertical: 8, 
    paddingHorizontal: 10,
    margin: 16, 
    borderRadius: 10
  }
});
