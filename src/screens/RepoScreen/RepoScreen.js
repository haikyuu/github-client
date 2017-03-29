import React, { Component } from 'react'
import {
	View,
	Text,
  TextInput,
  Button,
} from 'react-native'
import {
  getRepoCommits,
  saveToken,
} from '@services/githubApi/githubApi'
export default class LoginScreen extends Component{
    static navigationOptions = {
    	title: 'Repository Choice',
      header:{
        left: null
      }
  	};
    constructor(props){
      super(props)

      this.state = {
        repo: 'facebook/react-native',
      }
      this.onChangeRepo = this.onChangeRepo.bind(this)
      this.displayResponse = this.displayResponse.bind(this)
      this.getRepoCommits = this.getRepoCommits.bind(this)
      this.handleButtonClick = this.handleButtonClick.bind(this)
    }
    onChangeRepo(repo){
      this.setState({ repo })
    }
    getRepoCommits(){
      const { repo } = this.state
      return getRepoCommits(repo)
    }
    displayResponse(response){
      this.setState({response})
    }
    handleButtonClick(){
      const { navigate } = this.props.navigation
      const { repo } = this.state
      // return navigate('Commits', {commits: COMMITS})
      this.getRepoCommits()
      .then(response=>{
        navigate('Commits', {commits: response, repo})
      })
      .catch(error=>{
        this.displayResponse(error.toString())
      })
    }
  	render(){
  		return (
  			<View>
          <Text>Please enter a repo name e.g: reactjs/redux</Text>

          <View style={{padding: 10}}>
            <TextInput
              autoCapitalize={'none'}
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={this.onChangeRepo}
              value={this.state.repo}
            />

            <Button
              onPress={this.handleButtonClick}
              title="Show Commits"
              color="#841584"
            />
            <Text>{this.state.response}</Text>
          </View>
  			</View>	
  		)
  	}
}