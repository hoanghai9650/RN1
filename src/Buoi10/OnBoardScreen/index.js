import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet,StatusBar,TouchableOpacity } from 'react-native'
import { AppText, Button } from './components'

export default class OnBoardScreen extends Component {
    render() {
        return (
           <SafeAreaView style={styles.container}>
               <StatusBar barStyle="light-content" />
               <Text></Text>
               <View style={styles.bannerContainer}></View>
               <View style={styles.infoContainer}>
                   <AppText style={styles.headerText}>Welcome,</AppText>
                   <AppText style={styles.headerText}>React Native</AppText>
                   <AppText style={styles.descriptionText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tempora id consequuntur libero nihil, debitis doloremque blanditiis rem fuga iure.</AppText>
               </View>
               <View style={styles.buttonContainer}>
                   <Button title={'SIGN UP'} style={styles.signUpButton}/>
                   
                   <Button 
                   onPress={this.props.navigateToLoginScreen}
                   title={'SIGN IN'} style={[styles.loginBtn, 
                    {backgroundColor:'#000', marginTop:15}]}>
                    
                   </Button>
                   
               </View>


           </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#000'
        
    },
    bannerContainer: {
        flex: 2,

    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal:30,
        alignItems: 'flex-start',
        // backgroundColor:'#bfb'
    },
    buttonContainer:{
        flex: 1,
        paddingHorizontal: 30,

    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 30
    },
    descriptionText: {
        marginTop: 10,
        opacity: 0.7
    },
    buttonStyles: {
        alignItems: 'center',
        justifyContent:'center',
        flex: 1,
        borderRadius:15,
        backgroundColor:'#fbf'
    },
    signUpButton: {
        height: 70,
        backgroundColor:'#19191f',
    },
    loginBtn:{
        height: 70,
        marginTop: 10,
        borderWidth:1,
        borderColor: '#fff',
    }

})
