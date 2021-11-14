import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import AppText from '../Text';

export default class Button extends Component {
    render() {
        const {title, style, onPress, gradient} = this.props;
        if(gradient) {
            <View
            style={{
                height:72,
                
            }}
            ></View>
        }
        return (
            <TouchableOpacity onPress={onPress} style={[styles.buttonStyles, style]}>
                <AppText> {title} </AppText>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    
    buttonStyles: {
        alignItems: 'center',
        justifyContent:'center',
        
        borderRadius:15,
        backgroundColor:'#fbf'
    },

})

