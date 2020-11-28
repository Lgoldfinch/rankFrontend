import React, {Component} from 'react';
import {
    View,
    Text, TouchableOpacity, FlatList
} from 'react-native'
import * as Alert from "react-native/Libraries/Alert/Alert";

class GetCars extends Component {
    constructor(props: {}) {
        super(props);

        this.state = {
             availableLifts: []
        }
    }

        // getLiftsIntoTastyView = this.state.availableLifts.map((lift) => {
        //     console.log(lift.driverName);
        // });



     lifts = (availableLifts: []) => {
        return (
           <>
               {availableLifts.map((data, key) => {
                   console.log("get in here?");
                   return (
                       <FlatList
                           data = {data}
                           renderItem = {({item}) => (<Text> {item} </Text>)}
                       />
               );
           })}
           </>
        )
        }

        renderCar = ({car}) => {
        return (
            <View>
                <Text>{car.driverName}</Text>
                <Text>{car.price}</Text>
                <Text>{car.rating}</Text>
            </View>
        );
    }

    handleGetCars = async () => {
        try {
            return await fetch('http://localhost:9000/products', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
                return response.json()
            })
                .then((responseJson) => {
                    this.setState({
                        availableLifts: responseJson
                    }, this.lifts(responseJson)
                )
                })
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <>
            <View>
                <TouchableOpacity style={{margin: 128}} onPress={this.handleGetCars}>
                    <Text> Click me to get soomeeeee </Text>
                </TouchableOpacity>
            </View>
                </>
        );
    }
}

export default GetCars;
