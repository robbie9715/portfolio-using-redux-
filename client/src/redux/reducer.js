//import { GoMail } from "react-icons/go";
import { LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_SUCCESS} from "./constants";

// const initialState ={
//     isAuthenticated:false,
//     user:{email:'user@gmail.com', pass:'12345678'}
// }

//reducer_________________________________
const initialState = { users: [''], isAuthenticated:false };

const AuthReducer = (state = initialState, action) => {
    const {payload} = action;
    
    switch (action.type){
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated:true
            }
            

        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
            }
        case SIGNUP_SUCCESS:
            window.users = [...state.users, payload]
            return {
                ...state,
                users:[...state.users, payload],
               
            }
            default:
                return state;
    }
}
export default AuthReducer; 