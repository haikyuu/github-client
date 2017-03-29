import React, { Component } from 'react'
import {
	View,
	Text,
  TextInput,
  Button,
  ListView,
  ActivityIndicator,
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
      const { repo } = props.navigation.state.params
      console.log('repo', repo)
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.sha !== r2.sha});
      this.state = {
        dataSource: ds.cloneWithRows(commits),
        pageCount: 1,
        lastPage,
        isLoading: false,
        repo,
      }
      this._data = commits

      this.loadMoreCommits = this.loadMoreCommits.bind(this)
      this.renderFooter = this.renderFooter.bind(this)
    }
    renderFooter(){
      return (
        <Button
          onPress={this.loadMoreCommits}
          title="Load older commits ..."
          color={this.state.isLoading? 'gray' : '#841584'}
        />
      )
    }
    renderCommitItem(commit){
      return <CommitItem {...commit}/>
    }
    loadMoreCommits(){
      const { repo, pageCount, isLoading } = this.state
      
      if (isLoading) {
        return
      }
      this.setState({
        isLoading: true,
      })

      getRepoCommits(repo, pageCount)
      .then(result=>{
        console.log('result', result)
        this._data = this._data.concat(result.result)
        this.setState({
          pageCount: pageCount + 1,
          isLoading: false,
          dataSource: this.state.dataSource.cloneWithRows(this._data)
        })
      })
      .catch(err=>{
        console.log('err', err)
        this.setState({
          isLoading: false,
        })
      })
    }
  	render(){
  		return (
  			<View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderCommitItem}
            renderFooter={this.renderFooter}
          />
  			</View>	
  		)
  	}
}