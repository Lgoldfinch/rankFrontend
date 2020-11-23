import React, {Component} from 'react';
import {
    View,
    Text, TouchableOpacity, FlatList
} from 'react-native'


const Car = ({ car }) => (
    <View>
        <Text>{car.driverName}</Text>
        <Text>{car.price}</Text>
        <Text>{car.rating}</Text>
    </View>
);

const renderCar = ({ car }) => (
    <Car car={car} />
);

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
                    renderItem={renderCar}
                    // keyExtractor={item => item.id}
                />
            </View>
            // <View>

            // </View>
        );
    }
}

export default GetCars;
// body: JSON.stringify({
//     a: this.state.driverName,
//     b: this.state.price,
//     c: this.state.rating
// })