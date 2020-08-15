import Login from "../containers/login/LoginScreen";

export const login = (data) => {
	let { email, password } = data;
	email = email.toLowerCase();
	return (dispatch) => {
		return fetch('/login', {
			method: 'POST',
			headers: {  //TODO AYUSHI change them accordinge to the API
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(email),
		})
		.then((response) => dispatch({
			type: 'Login',
			payload: data
		}))
	}
}