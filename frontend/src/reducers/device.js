const initialState = window.innerWidth <= 960 ? 'mobile' : 'web'


const deviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DEVICE_WEB":
            return 'web'
        case "DEVICE_MOBILE":
            return 'mobile'
        default:
            return state
    }
}

export default deviceReducer