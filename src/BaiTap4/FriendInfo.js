import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native'

export default class FriendInfo extends Component {
    render() {
        const {icon} = this.props;
        return (
            <View style={styles.container}>
                <Image source={icon.ava} style={styles.ava}></Image>
                <Text>{icon.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ava: {
        width: 60,
        height: 60,
        borderRadius:30
    },
    container:{
        
        alignItems: 'center',
        justifyContent: 'center',

    }
})

