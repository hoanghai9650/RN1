import React, { Component } from 'react'
import { Text, View,Image, StyleSheet, TouchableOpacity } from 'react-native'

export default class AddFriend extends Component {
    render() {
        const {friend} = this.props;
        return (
            <View style={styles.container}>
                <Image style={styles.ava} source= {friend.ava}/>
                <View style={styles.infoContent}>
                    <Text style={styles.name}>{friend.name}</Text>
                    <Text>{friend.friend}</Text>
                    
                </View>
                <View >
                <TouchableOpacity style={styles.addfriendBtn} >
                    <Text>Add Friend</Text>
                </TouchableOpacity>
                </View>
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
        backgroundColor:'#64b5f6',
        paddingVertical: 20,
        paddingHorizontal:10,
        with:'90%',
        borderRadius:10,
        marginHorizontal:10 ,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',

    },
    name:{
        fontWeight:'bold',

    },
    infoContent:{
        width: '50%',
    },
    addfriendBtn :{
        borderRadius: 20,
        backgroundColor:'#1e88e5',
        paddingHorizontal: 10,
        paddingVertical:10

    }
})
