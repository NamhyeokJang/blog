// isLog: sessionStorage.getItem('isLog') ? true : false
const initialState = {
    loading: false,
    isLog: sessionStorage.getItem('isLog') ? true : false,
    message: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TRY_LOGIN':
            return {
                ...state,
                loading: true,
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loading: false,
                isLog: true,
                message: action.payload
            }
        case 'LOGIN_FAILED':
            return {
                ...state,
                loading: false,
                isLog: false,
                message: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                isLog: false
            }
        default:
            return state
    }
}

export default userReducer