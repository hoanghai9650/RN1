import React, {Component} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View, StyleSheet, StatusBar} from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" />
          <View style={styles.headerContainer}>
        <TouchableOpacity onPress={this.props.navigateToOnboardScreen}>
          <Text>goBack </Text>
        </TouchableOpacity>
        </View>
        <View style={styles.formContainer}></View>
        <View style={styles.formContainer}></View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#bfb',
    },
    headerContainer:{
        flex:9,
    },
    formContainer:{
        flex:11,
    },
    buttonContainer:{
        flex: 2,
    }
})
