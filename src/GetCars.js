import React, {Component} from 'react';
import {
    View,
    Text, TouchableOpacity, FlatList
} from 'react-native'






class GetCars extends Component {
    constructor (props: {}) {
        super(props);

        this.state = {
            cars: [],
            driverName: '',
            price: '',
            rating: ''
        }
    }

     Car = ({ car }) => (
        <View>
            <Text>{car.driverName}</Text>
            <Text>{car.price}</Text>
            <Text>{car.rating}</Text>
        </View>
    );

     renderCar = ({ car }) => (
        <Car car={car} />
    );

    handleGetCars = async () => {
        try {
             await fetch('http://localhost:9000/products', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then((response) => response.json())
                .then((responseJson) => {
                    this.setState({
                    cars: responseJson
                    })
                })
        } catch (error) {
            console.error(error);
        }
    }

    render() {
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
