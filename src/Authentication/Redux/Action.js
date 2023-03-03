import * as types from './ActionType';
import axios from 'axios';

const loginuser = (user) => ({
    type: types.LOGIN_USER,
    payloads: user
})

// const logOutUser = (user) => ({
//     type: types.LOGOUT_USER,
//     payloads: user,
// })

// export const logOut = () => {
//     return function (dispatch) {
       
//         dispatch(logOutUser(false))
//     }
// }

export const logIn = () => {
    return function (dispatch) {
         
        dispatch(loginuser(true))
    }
}
