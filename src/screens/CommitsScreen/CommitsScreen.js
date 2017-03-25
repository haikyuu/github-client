import React, { Component } from 'react'
import {
	View,
	Text,
  TextInput,
  Button,
  ListView,
} from 'react-native'
import {
  getRepoCommits,
  saveToken,
} from '@services/githubApi/githubApi'
import {
  CommitItem,
} from '@components'
export default class CommitsScreen extends Component{
    static navigationOptions = {
    	title: 'Commits'
  	};
    constructor(props){
      super(props)
      const commits = props.navigation.state.params.commits.result
      const lastPage = props.navigation.state.params.commits.lastPage
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.sha !== r2.sha});
      this.state = {
        dataSource: ds.cloneWithRows(commits),
      }
    }
    renderCommitItem(commit){
      return <CommitItem {...commit}/>
    }
  	render(){
  		return (
  			<View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderCommitItem}
          />
  			</View>	
  		)
  	}
}