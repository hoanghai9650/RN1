import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
import { countUpAction, countDownAction } from '../redux/actions/countAction'

 class DemoRedux extends Component {
    
   onCountUpPress = ()=>{
    //    this.props.dispatch({type: 'Dispatch Action'});
    this.props.countUp();
   }
   onCountDownPress = ()=>{
       this.props.countDown();
   }
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Demo redux</Text>
                <Text> Number: {this.props.number}</Text>
                <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                    <TouchableOpacity style={{backgroundColor:'#bfb', padding: 10}} onPress={this.onCountUpPress}>
                        <Text>Count up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'#bbf', padding: 10}} onPress={this.onCountDownPress}>
                        <Text>Count down</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state);
    return {number: state.number};
}
const mapDispatchToProps = (dispatch) =>{
    return{
        countUp: ()=> {
            dispatch(countUpAction());
        },
        countDown: ()=>{
            dispatch(countDownAction());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux);
