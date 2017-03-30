import {
  AsyncStorage,
} from 'react-native'
import { encode } from 'base-64'
import { github } from '../../config'
const GITHUB_URL = `https://api.github.com`
const TOKEN_NAME = `@github_token_name`

let token

function saveToken(token){
  return AsyncStorage.setItem(TOKEN_NAME, token)
  .catch(error=>{
    return ({error})
  })
}
function getToken(){
  return AsyncStorage.getItem(TOKEN_NAME)
  .catch(error=>{
    //error saving token
    return ({error})
  }).then(t=>{
    token = t
    return t
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
        token = res.token
        saveToken(res.token)
      	return res.token
      })
}


function getRepoCommits(repo, page){
  let lastPage
  const headers = getTokenHeader()
  return fetch(`${GITHUB_URL}/repos/${repo}/commits${page?'?page='+page:''}`, {
    method: 'GET',
    headers,
  })
  .then(res=>{
    if (!res.ok) {
      throw new Error(`error in getRepoCommits Sttaus: ${res.status}`)
    }
    lastPage = res.headers.map.link[0].split(';')[1].split('=')[2].slice(0, -1)
    return res.json()
  })
  .then(res=>({
    lastPage,
    result: res,
  }))
}

function getTokenHeader() {
  let tokenHeader = {
    // 'User-Agent': config.userAgent,
    'User-Agent': github.userAgent,
    'Accept': 'application/json',
    'Authorization': `token ${token}`
  }
  return tokenHeader
}
export {
  login,
  saveToken,
  getToken,
  getRepoCommits,
}
