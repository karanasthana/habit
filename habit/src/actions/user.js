export const login = data => {
	return dispatch => {
		return fetch('/api/login', {
			method: 'POST',
			headers: {  //TODO AYUSHI change them according to the API
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
		.then( response => dispatch({
			type: 'LOGIN',
			payload: response.data
		}))
	}
}

export const signup = data => {
	return dispatch => {
		return fetch('/api/signup', {
			method: 'POST',
			headers: {  //TODO AYUSHI change them according to the API
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
		.then( response => dispatch({
			type: 'SIGNUP',
			payload: response.data
		}))
	}
}