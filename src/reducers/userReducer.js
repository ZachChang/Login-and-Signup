export default function reducer(state, action) {
    let payload = action.payload;
    switch(action.type) {
        case 'WRITE_POPUP_MSG':
            return {
                ...state,
                popupMsg: payload
            };
        default:
            return;
    }
}