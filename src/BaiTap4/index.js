import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native'
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FriendInfo from './FriendInfo';
import {blackwidow,captain,spider,flash,ironman,strange,suppergirl,wonderwoman,wanda,yasuo} from './images';
import AddFriend from './AddFriend';
export default class Layout extends Component {
    findArray = [
        {
            name: ' Widow',
            friend: '15 ban chung',
            addFriend: 'Ket Ban',
            ava: blackwidow,
            backgroundColor:'#00bcd4'
        },
        {
            name: ' Captain',
            friend: '15 ban chung',
            addFriend: 'Ket Ban',
            ava: captain,
        },
        {
            name: 'Spider',
            friend: '15 ban chung',
            addFriend: 'Ket Ban',
            ava: spider,
        },
        {
            name: 'Flash',
            friend: '15 ban chung',
            addFriend: 'Ket Ban',
            ava: flash,
        },
        {
            name: 'Ironman',
            friend: '15 ban chung',
            addFriend: 'Ket Ban',
            ava: ironman,
        },
        {
            name: 'Strange',
            friend: '15 ban chung',
            addFriend: 'Ket Ban',
            ava: strange,
        },
        {
            name: 'Supper Girl',
            friend: '15 ban chung',
            addFriend: 'Ket Ban',
            ava: suppergirl,
        },
        {
            name: 'Wanda',
            friend: '15 ban chung',
            addFriend: 'Ket Ban',
            ava: wanda,
        },
        {
            name: 'Wonder Woman',
            friend: '15 ban chung',
            addFriend: 'Ket Ban',
            ava: wonderwoman,
        },
        {
            name: 'yasou rac',
            friend: '15 ban chung',
            addFriend: 'Ket Ban',
            ava: yasuo,
        },
        

    ];
    addFriendArray=[
        {
            name: ' Widow',
            friend: '15 ban chung',
            addFriend: 'Ket Ban',
            ava: blackwidow,
            
        },
        {
            name: ' Captain',
            friend: '15 ban chung',
            addFriend: 'Ket Ban',
            ava: captain,
            
        },
        {
            name: 'Spider',
            friend: '15 ban chung',
            addFriend: 'Ket Ban',
            ava: spider,
           
        },
        {
            name: 'Flash',
            friend: '15 ban chung',
            addFriend: 'Ket Ban',
            ava: flash,
            
        },
        {
            name: 'Ironman',
            friend: '15 ban chung',
            addFriend: 'Ket Ban',
            ava: ironman,
            
        },
        {
            name: 'Strange',
            friend: '15 ban chung',
            addFriend: 'Ket Ban',
            ava: strange,
            
        },
        {
            name: 'Supper Girl',
            friend: '15 ban chung',
            addFriend: 'Ket Ban',
            ava: suppergirl,
        },
        {
            name: 'Wanda',
            friend: '15 ban chung',
            addFriend: 'Ket Ban',
            ava: wanda,
        },
        {
            name: 'Wonder Woman',
            friend: '15 ban chung',
            addFriend: 'Ket Ban',
            ava: wonderwoman,
        },
        {
            name: 'yasou rac',
            friend: '15 ban chung',
            addFriend: 'Ket Ban',
            ava: yasuo,
        },
    ]
    

    render() {
        return (
            <View style={styles.container}>
                
            <View style={styles.findContainer}>
                <EntypoIcon size={20} color="#004d40"  name="back-in-time" solid>Danh Sach Tim Kiem</EntypoIcon>
                <FlatList
                horizontal
                ItemSeparatorComponent={
                    () => <View style={{ width: 16, backgroundColor: 'white' }}/>
                }
                contentContainerStyle = {styles.findScroll} 
                data = {this.findArray}
                renderItem = {({item})=> <FriendInfo icon={item}/>}
                />
            </View>
            <ScrollView >
            <View style={styles.addFriendContainer}>
            <EntypoIcon name="add-user"size={20} color="#004d40" >Goi y ket ban</EntypoIcon> 
            
            <FlatList
            data = {this.addFriendArray}
            renderItem={({item})=> <AddFriend friend={item}/>}
            keyExtractor={(item, index)=> {
                return `${item.name}_${index}`
            }}
            />
            
            </View>
            </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    findContainer:{
        paddingVertical: 10,
        
    },
   findScroll:{
      paddingVertical: 10,
      paddingHorizontal: 10
   },
   addFriendContainer:{ 
       marginVertical:10,
       
   },
   addFriendScroll: {
       paddingBottom: 50,
       marginBottom: 50
   }

})

