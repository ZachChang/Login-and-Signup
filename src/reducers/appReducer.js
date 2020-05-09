export default function reducer(state, action) {
    let payload = action.payload;
    switch(action.type) {
        case 'WRITE_POPUP_MSG':
            return {
                ...state,
                popupMsg: payload
            };
        case 'WRITE_NOTIFICATION_MSG':
            return {
                ...state,
                notificationMsg: payload
            };
        case 'LOGIN_POPUP_TOGGLE':
            return {
                ...state,
                isLoginPopupOpen: payload
            };
        case 'SIGNUP_POPUP_TOGGLE':
            return {
                ...state,
                isSignupPopupOpen: payload
            };
        case 'TOGGLE_LOADING':
            return {
                ...state,
                isShowLoading: payload
            };
        default:
            return;
    }
}