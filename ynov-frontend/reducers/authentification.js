import { AUTH_TOGGLE } from '../actions/authentification'
const initialState = {
    isAuthenticated : false
}

export default (state = initialState, action) => {
    switch(action.type){
        case AUTH_TOGGLE:
            return {
                ...state,
                isAuthenticated : !state.isAuthenticated
            }
        default:
            return state
    }
}