import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class index extends Component {
    state = {number: 0}
    constructor(props) {
        super(props);
        this.state = {numberChild: 3,}
    }
    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateToProps');
        return state;
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    render() {
        console.log('render');
        return (
            <View style={styles.container}>
                <Text>DemoLifecycle Component</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

