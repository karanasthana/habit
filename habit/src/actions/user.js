import * as CONSTANT from '../constants/user';

export const login = data => {
	return dispatch => {
		return fetch('http://0.0.0.0:8000/api/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
		.then( response => dispatch({
			type: CONSTANT.LOGIN,
			payload: response.data
		}))
	}
}

export const signup = data => {
	return dispatch => {
		return fetch('http://0.0.0.0:8000/api/signup', {
			method: 'POST',
			headers: {  
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
		.then( response => 
			dispatch({
			type: CONSTANT.SIGNUP,
			payload: response.data
		})
		.catch( error => 
			console.log(error)
		))
	}
}