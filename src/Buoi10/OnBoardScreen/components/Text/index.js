import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class AppText extends Component {
    render() {
        const {children, style} = this.props
        return  <Text style={[styles.defaultTextStyle, style]}> {children} </Text>;
     
    }
}
const styles = StyleSheet.create({
    defaultTextStyle:{
        color: '#fff'
    }
})

