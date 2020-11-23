import React, {Component} from 'react';
import {TouchableOpacity, Text, View, TextInput, StyleSheet, ImageBackground, StatusBar, Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component{
    state={
        modalVisible: false
    }
    openRegister(){
        this.setState({modalVisible: true});
    }
    closeRegister = () =>{
        this.setState({modalVisible: false});
    }
    // handleEmail = (value) =>{
    //     this.setState({ email: value })
    // }
    // handlePassword = (value) =>{
    //     this.setState({ password: value })
    // }
    handleLogin = () => {
        fetch('http://127.0.0.1:9000/products', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
            // body: JSON.stringify({
            //     u: this.state.email,
            //     p: this.state.,
            // }),
        })
            .then((response) => {
                if(response.status == 200){
                    response.body

                    Actions.Search();
                }else{
                    Alert.alert("Incorrect email/password");
                }
            })
            .catch((error) => {
                Alert.alert("Sorry, something went wrong. Please try again later.");
            });
    }
    render(){
        return(
            <ImageBackground source={require('../../../img/foodBackground.jpg')} style={styles.backgroundImage}>
                <StatusBar hidden = {true}/>
                <View style = {styles.container}>
                    <TextInput style = {styles.input}
                               placeholder = "Email"
                               autoCapitalize = "none"
                               autoCorrect={false}
                               onChangeText = {this.handleEmail}
                               returnKeyType="done"/>
                    <TextInput style = {styles.input}
                               placeholder = "Password"
                               autoCapitalize = "none"
                               onChangeText = {this.handlePassword}
                               secureTextEntry={true}
                               returnKeyType="go"
                               onSubmitEditing={this.handleLogin} />
                    <View style = {styles.registerButtonContainer}>
                        <TouchableOpacity onPress = {() => {this.openRegister()}}>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {this.handleLogin}>
                        <Text style = {styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {/*<Register modalVisible = {this.state.modalVisible} close = {this.closeRegister}/>*/}
                </View>
            </ImageBackground>
        )
    }
}


