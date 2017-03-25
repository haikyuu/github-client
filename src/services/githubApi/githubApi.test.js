jest.mock('./githubApi');
import * as githubApi from './githubApi'
// The promise that is being tested should be returned.
describe('github API', ()=>{
	it('returns error when credentials are wrong', () => {
		const credentials = {
			username: 'te',
			password: 'ee',
		}
		return githubApi.login(credentials).then(res=>{
		  expect(res).toEqual({
		  		message: 'Bad credentials',
		  });
		})
	});

	it('returns token when credentials are correct', () => {
		const credentials = {
			username: 'Aladin',
			password: 'superSecret',
		}
		return githubApi.login(credentials).then(res=>{
		  expect(res).toEqual(
		  		`token: do not share me`
		  	);
		})
	})

	it('saves github API token in AsyncStorage', ()=>{
		return githubApi.saveToken('token').then(res=>{
			expect(res).toEqual(null)
		})
	})
	it('gets github API token from AsyncStorage', ()=>{
		const token = 'token'
		return githubApi.saveToken(token).then(()=>{
			return githubApi.getToken().then(res=>{
				expect(res).toEqual('token')
			})
		})
	})
})