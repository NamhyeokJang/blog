import axios from 'axios'

export const deviceMobile = () => {
    return {
        type: 'DEVICE_MOBILE'
    }
}

export const deviceWeb = () => {
    return {
        type: 'DEVICE_WEB'
    }
}

export const tryLogin = () => {
    return {
        type: "TRY_LOGIN",
    }
}

export const loginSuccess = message => {
    return {
        type: "LOGIN_SUCCESS",
        payload: message
    }
}

export const loginFailed = message => {
    return {
        type: "LOGIN_FAILED",
        payload: message
    }
}

export const logout = () => {
    sessionStorage.removeItem('isLog')
    return {
        type: "LOGOUT"
    }
}

export const login = password => {
    return async (dispatch) => {
        await dispatch(tryLogin())
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_API}/api/login`, {
                password: password
            })
            if (data.result === 'ok') {
                sessionStorage.setItem('isLog', true)
                dispatch(loginSuccess(data.message))
            }
            if (data.result === 'fail') dispatch(loginFailed(data.message))
        } catch (error) {
            dispatch(loginFailed('error'))
        }
    }
}