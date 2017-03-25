import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View,
  Image,
} from 'react-native';
import moment from 'moment'
const CommitItem = (props) => {
  const { author, committer, message } = props.commit
  let avatar_url
  if (props.author) {
    avatar_url = props.author.avatar_url
  }
  return (
      <View style={{ paddingVertical: 8, paddingHorizontal: 4,
        flexDirection: 'row'
       }}>
       {avatar_url &&  <Image source={{uri: avatar_url }} style={{width: 50, height: 50, borderRadius: 4}}/>}
       
        <View style={{ marginLeft: 4, flex: 1, borderBottomWidth: .2, }}>
          <Text numberOfLines={1}
           style={{ fontSize: 12, fontWeight: 'bold', paddingBottom: 4, }}>
            {message}
          </Text>
          
          <Text style={{ fontSize: 12, }}>
          {`${author.name} committed ${committer? `with ${committer.name}`: ``} ${moment(author.date).fromNow()}`}
          </Text>
        </View>

      </View>
  )
}
export default CommitItem;