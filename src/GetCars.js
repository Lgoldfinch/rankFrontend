import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet
} from 'react-native'

class GetCars extends Component {
    constructor (props: {}) {
        super(props);

        this.state = {
            cars: []
        }
    }

    styles = StyleSheet.create({
        itemProvider: {
          fontSize: 20
        },
        itemPrice: {
          marginLeft: 150,
          fontSize: 18
        },
        itemRow: {
          flex: 1,
          flexDirection: "row",
          marginVertical: 40,
          backgroundColor: '#d3d3d3',
          padding: 20,
          marginVertical: 8,
          marginHorizontal: 16,
          borderRadius: 4
        },
      });

    renderCar = ({ item }) => {
        return (
            <View style={this.styles.itemRow}>
                <Text style={this.styles.itemProvider}>{item.driverName}</Text>
                <Text style={this.styles.itemPrice}>{item.price}</Text>
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
        return (
            <View >
                     <TouchableOpacity style = {{ margin: 128 }} onPress = {this.handleGetCars}>
                         <Text> Click me to get soomeeeee </Text>
                     </TouchableOpacity>
                <FlatList
                    data={this.state.cars}
                    renderItem={this.renderCar}
                    keyExtractor={car => car.driverName}
                />
            </View>
        );
    }
}

export default GetCars;
