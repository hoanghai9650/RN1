import React, { Component } from 'react'
import { Image, Text, View,StyleSheet } from 'react-native'
import axios from 'axios'

export default class DemoCallAPI extends Component {
    state= {
        product:{
            image: '',
            price: 0,
            name: '',
            description: '',

        }
    }
    componentDidMount(){
    //     fetch("http://svcy3.myclass.vn/api/Product")
    //   .then((response) => response.json())
    axios({
        url: 'http://svcy3.myclass.vn/api/Product',
        method: 'GET',
    })
      .then(({data}) => {
          const image = data.content[0].image;
          const price = data.content[0].price;
          const name = data.content[0].name;
          const description = data.content[0].description;
          const product = {image, price, name, description};
          
          this.setState({product})

      })
      .catch ((error) => console.error(error));
    }
    render() {
        const {product}=this.state;
        console.log(this.state.product);
        return (
            <View>
                <Text> {product.name} </Text>
                <Text> {product.price} </Text>
                <Text> {product.description} </Text>
                {product.image.length > 0 && (<Image source={{uri: product.image}} style={styles.image}/>)}
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    image:{
        height:50,
        width: 50,
    }
})

