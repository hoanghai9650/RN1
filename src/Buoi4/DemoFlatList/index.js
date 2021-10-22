import React, { Component } from 'react'
import {Text, View, StyleSheet, Image, ScrollView, FlatList} from 'react-native';
import Alto_icon from './Alto_icon.png';
import Alto_0 from './Alto_0.png';
import GameInfo from './GameInfo';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default class DemoFlatList extends Component{
    listGameInfo = [
      {
        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
          'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        preview: Alto_0,
        backgroundColor: '#824671CC',
      },
  
      {
        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
          'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        preview: Alto_0,
        backgroundColor: '#F4B940',
      },
      {
        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
          'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        preview: Alto_0,
        backgroundColor: '#96CC96',
      },
  
      {
        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
          'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        preview: Alto_0,
        backgroundColor: '#96CC96',
      },
      {
        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
          'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        preview: Alto_0,
        backgroundColor: '#F4B940',
      },
      {
        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
          'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        preview: Alto_0,
        backgroundColor: '#96CC96',
      },
  
      {
        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
          'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        preview: Alto_0,
        backgroundColor: '#96CC96',
      },
      {
        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
          'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        preview: Alto_0,
        backgroundColor: '#F4B940',
      },
      {
        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
          'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        preview: Alto_0,
        backgroundColor: '#96CC96',
      },
  
      {
        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
          'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        preview: Alto_0,
        backgroundColor: '#96CC96',
      },
    ];
  
    // renderListGameInfo = () => {
    //   return this.listGameInfo.map(({backgroundColor, icon, title, subTitle}, index) => (
    //     <GameInfo 
    //     key={index} 
    //     backgroundColor={backgroundColor} 
    //     icon={icon} 
    //     title={title} 
    //     subTitle={subTitle}/>
    //   ));
    // };
  
    render() {
      return (
        <View style={styles.container}>
          <EntypoIcon name="back-in-time">hello</EntypoIcon>
        {/* <ScrollView 
        style={styles.scrollContainer} 
        contentContainerStyle={styles.scrollContent}> 
        {this.renderListGameInfo()}
        </ScrollView> */}
        <FlatList
        contentContainerStyle={styles.scrollContent}
        data ={this.listGameInfo}
        renderItem={({item})=> <GameInfo game={item}/>}
        keyExtractor={(item, index)=> {
          return `${item.title}_${index}`
          // horizontal={true}
        }}
        />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#343434',
      flex: 1,
      paddingVertical: 10,
      
    },
    scrollContainer: {
      marginVertical: 50,

    },
    scrollContent:{
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 50,
    },
    
  });
  
