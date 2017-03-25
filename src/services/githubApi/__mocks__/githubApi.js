const authData = {
  onlyUserName: 'Aladin',
  onlyPassword: 'superSecret',
  token: 'token: do not share me'
}
let db = {

}
function login({username, password}) {
  const isAuthorized = authData.onlyUserName === username && authData.onlyPassword === password
  return new Promise((resolve, reject) => {
    process.nextTick(
      () => isAuthorized ? resolve(authData.token) : resolve({
        message: 'Bad credentials',
      })
    )
  })
}

function saveToken(token){
  return new Promise((resolve, reject) => {
    process.nextTick(
      () => {
        db['@github_token'] = token
        resolve(null)
      }
    )
  })
}

function getToken(){
  return new Promise((resolve, reject) => {
    process.nextTick(
      () => resolve(db['@github_token'])
    )
  })
}
export {
  login,
  authData,
  saveToken,
  getToken,
}