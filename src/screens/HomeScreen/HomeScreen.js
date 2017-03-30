import React, { Component } from 'react'
import {
	View,
	Image,
	Dimensions,
  Text,
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
      const timeToWait = 2 //seconds

  		getToken().then(token=>{
        setTimeout(()=>{
    			if (!token) {
    				return navigate('Login')
    			}
    			return navigate('Repo')
        }, timeToWait * 1000);
  		})
      .catch(err=>{
        setTimeout(()=>{
  			 return navigate('Login')
        }, timeToWait * 1000);
  		})
  	}
  	render(){
  		return (
  			<View>
          <Text style={{alignSelf: 'center', marginTop: 15}}>
            Hiring octocats ... Please wait
          </Text>
      		<Image
      			resizeMode={'contain'}
      			style={{width, height }}
      		 	source={require('./octocat.jpg')}/>
  			</View>	
  		)
  	}
}