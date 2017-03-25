import React, { Component } from 'react'
import {
	View,
	Text,
  TextInput,
  Button,
} from 'react-native'
import {
  login,
  saveToken,
} from '@services/githubApi/githubApi'

export default class LoginScreen extends Component{
    static navigationOptions = {
    	title: 'Login',
  	};
    constructor(props){
      super(props)

      this.state = {
        username: '',
        password: '',
      }
      this.onChangeUsername = this.onChangeUsername.bind(this)
      this.onChangePassword = this.onChangePassword.bind(this)
      this.displayResponse = this.displayResponse.bind(this)
      this.login = this.login.bind(this)
      this.handleButtonClick = this.handleButtonClick.bind(this)
    }
    onChangeUsername(username){
      this.setState({ username })
    }
    onChangePassword(password){
      this.setState({ password })
    }
    login(){
      const { username, password } = this.state
      return login({ username, password })
    }
    displayResponse(response){
      this.setState({response})
    }
    handleButtonClick(){
      this.login()
      .then(response=>{
        this.displayResponse('You logged in successfully')
        saveToken(response)
      })
      .catch(error=>{
        this.displayResponse(error.toString())
      })
    }
  	render(){
  		return (
  			<View>
          <Text>Please Login to your Github account.</Text>

          <View style={{padding: 10}}>
            <TextInput
              autoCapitalize={'none'}
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={this.onChangeUsername}
              value={this.state.username}
              placeholder={'Username'}
            />
            <TextInput
              autoCapitalize={'none'}
              style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 5}}
              onChangeText={this.onChangePassword}
              value={this.state.password}
              secureTextEntry
              placeholder={'Password'}
            />

            <Button
              onPress={this.handleButtonClick}
              title="Login"
              color="#841584"
            />
            <Text>{this.state.response}</Text>
          </View>
  			</View>	
  		)
  	}
}