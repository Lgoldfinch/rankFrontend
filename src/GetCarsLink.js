import React, {Component} from 'react';
// import { Actions } from 'react-native-router-flux'
import { TouchableOpacity, Text } from 'react-native';

const GetCars = () => {
    Actions.cars()
};

export default class GetCarsLink extends Component {
    render() {
        return (
            <TouchableOpacity style = {{ margin: 128 }} onPress = {GetCars}>
                <Text> Click me to get soomeeeee </Text>
            </TouchableOpacity>
            );
    }
}

