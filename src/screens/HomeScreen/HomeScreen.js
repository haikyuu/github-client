import React, { Component } from 'react'
import {
	View,
	Image,
	Dimensions,
} from 'react-native'
import {
	getToken,
} from '@services/githubApi/githubApi'
const { width, height } = Dimensions.get('window')
export default class LoginScreen extends Component{
    static navigationOptions = {
    	title: 'Welcome',
  	};
  	componentDidMount(){
  		const { navigate } = this.props.navigation;
  		getToken().then(token=>{
  			if (!token) {
  				navigate('Login')
  			}
  			navigate('Repo')
  		})
  		.catch(err=>{
  			navigate('Login')
  		})
  	}
  	render(){

  		return (
  			<View>
          		<Image
          			resizeMode={'contain'}
          			style={{width, height }}
          		 	source={require('./octocat.jpg')}/>
  			</View>	
  		)
  	}
}