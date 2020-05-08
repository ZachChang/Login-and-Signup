import React, { useReducer, useCallback, useMemo, useRef } from 'react';

const customerReducer = (reducerFun, initalState, enableLogger) => {
    const [state, dispatch] = useReducer(reducerFun, initalState)
    const preState = useRef();

    const dispatchWithLogging = useCallback(action => {
        const actionType = typeof action === 'object' ? action.type: action;
        preState.current = {...preState.current, actionType, action};

        dispatch(action);
    }, []);

    const customDispatch = enableLogger ? dispatchWithLogging : dispatch;

    useMemo(
        function logStateAfterChange() {
            if (!enableLogger || !preState.current) return;

            const { actionType, state: previousState, action } = preState.current;

            console.groupCollapsed(`${actionType}`)
            console.log('%cPrevious State: ', 'color: red;', previousState);
            console.log('%cAction: ', 'color: blue;', action);
            console.log('%cCurrent State: ', 'color: green;', state);
            console.groupEnd();
        }, [state, enableLogger]
    );

    preState.current = {...preState.current, state};
    return [state, customDispatch];
};

export default customerReducer;
