import * as CONSTANT from '../constants/user';

const initialState = {
    user_name: '',
    email: ''
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case CONSTANT.AUTH_EMAIL:
            return {
                ...state,
                api_token: action.payload.api_token,
                user: action.payload.user,
            };
        default:
            return state;   
    }
}