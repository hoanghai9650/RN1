import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'

export default class index extends Component {
    
    render() {
        const {item, index, image, title, price} = this.props;
        const isRightItem = index % 2 !== 0;
        return (
            
            <View style={[styles.cardProduct,isRightItem && {height: 300},
                ]}>
                    
                <ImageBackground  source={{uri: image}} style={styles.image}></ImageBackground>
                <View style={styles.description}>
                <Text style={styles.name}>{title}</Text>
                <Text style={styles.price} >${price}</Text>
                </View>
                </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    cardProduct: {
        width: '45%',
        height: 250,
        backgroundColor: '#fff',
        marginBottom: 30,
        borderRadius: 10,
        // marginRight: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    },
    image:{
        height:150,
    
        flex: 2,
    },
    description: {
        flex: 1,
        paddingHorizontal:5,
    },
    name:{
        fontWeight: 'bold',
        color: '#000',
        marginTop:10,
    },
    price:{
        color: '#000',
        marginTop:10,

    }

});
