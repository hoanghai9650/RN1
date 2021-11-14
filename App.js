/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
//  import { View, Text } from 'react-native';
//  import DemoComponent from './src/Buoi1/DemoComponent';
//  import {DemoComponentNonDefault} from './src/Buoi1/DemoCompNonDefault';
//  import DemoStyle from './src/Buoi1/DemoStyle';
//  import Binding from './src/Buoi3/BindingData';
//  import UI from './src/BaiTapUI'
//  import Emoji from './src/Emoji';
//  import ExRender from './src/Buoi4/ExRender';
//  import DemoScroll from './src/Buoi4/DemoScroll';
// import DemoFlatList from './src/Buoi4/DemoFlatList/';
// import Layout from './src/BaiTap4';
// import RockPaperScissor from './src/Buoi5/RockPaperScissor';
import {Provider} from 'react-redux';
// import {store} from './src/Buoi6/redux/store';
import store from './src/Buoi7/redux/store';
import DemoRedux from './src/Buoi6/DemoRedux';
import RockPaperScissorRedux from './src/Buoi7/RockPaperScissorRedux';
import DemoLifeCycle from './src/Buoi8/DemoLifeCycle';
import DemoCallAPI from './src/Buoi8/DemoCallAPI';
import ListProductScreen from './src/Buoi9/ListProductScreen';
import OnBoardScreen from './src/Buoi10/OnBoardScreen';
import RootScreen from './src/Buoi10';
// Stateful Component
class App extends Component {

  render() {
    return (
    <Provider store={store}>
        <ListProductScreen/>
        </Provider>
    )
  }
}




export default App;
