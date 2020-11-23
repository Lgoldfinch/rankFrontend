import React, {Component} from 'react';
import {
    View,
    Text, TouchableOpacity, FlatList
} from 'react-native'

class GetCars extends Component {
    constructor (props: {}) {
        super(props);

        this.renderCar = this.renderCar.bind(this);

        this.state = {
            cars: []
        }
    }

     renderCar = ({ car }) => {
        console.log("le car")
        console.log(car)
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
             await fetch('http://localhost:9000/products', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then((response) => {
               return response.json()
             })
                .then((responseJson) => {
                    this.setState( {
                        cars: responseJson.lifts
                    })
                })
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        console.log("from cars")
        console.log(this.state.cars)
        return (
            <View >
                     <TouchableOpacity style = {{ margin: 128 }} onPress = {this.handleGetCars}>
                         <Text> Click me to get soomeeeee </Text>
                     </TouchableOpacity>
                <FlatList
                    data={this.state.cars}
                    renderItem={this.renderCar}
                />
            </View>
        );
    }
}

export default GetCars;
