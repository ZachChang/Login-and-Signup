export default function reducer(state, action) {
    let payload = action.payload;
    switch(action.type) {
        case 'WRITE_POPUP_MSG':
            return {
                ...state,
                popupMsg: payload
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
        default:
            return;
    }
}