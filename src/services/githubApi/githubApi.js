import {
  AsyncStorage,
} from 'react-native'
import { encode } from 'base-64'
import { github } from '../../config'
const GITHUB_URL = `https://api.github.com`

function saveToken(token){
  AsyncStorage.setItem('@github_token', token)
  .catch(error=>{
    return ({error})
  })
}
function getToken(){
  AsyncStorage.getItem('@github_token')
  .catch(error=>{
    //error saving token
    return ({error})
  })
}
function login({username, password}){
      const credentials = encode(`${username}:${password}`)
      return fetch(`${GITHUB_URL}/authorizations`, {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${credentials}`,
          'User-Agent': github.userAgent,
        },
        body: JSON.stringify({
          'client_id': github.client_id,
          'client_secret': github.client_secret,
          'scopes': github.scopes,
          'note': github.note
        })
      })
      .then(res=>res.json())
      .then(res=>{
        if (res.message === 'Bad credentials') {
          return `User ${username} with pwd ${password} not found` 
        }
        saveToken(res.token)
      	return res.token
      })
}


export {
  login,
  saveToken,
  getToken,
}
