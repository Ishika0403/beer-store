import * as types from './ActionType'

const initialState = {
    ValidUser: [
        {
            username:"test",
            password:"test@123"
        }
    ]
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_USER:
            return{
                ...state,
                user:action.payloads,
            }
        case types.LOGOUT_USER:
            return{
                ...state,
                user:action.payloads
            }

        default: return state
    }
}

export default userReducer
