import React, { useReducer } from 'react';
import testOrder from '../test-data';


// Define initial state for context
const initialState = {
    selectedId: '',
    responseData: null,
    responseError: '',
    testOrder,
    requestStatus: { loading: false, error: '' },
};

// Define reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_SELECTED_ID':
            return { ...state, selectedId: action.payload };
        case 'SET_RESPONSE_DATA':
            return { ...state, responseData: action.payload };
        case 'SET_REQUEST_STATUS':
            return { ...state, requestStatus: action.payload };
        default:
            return state;
    }
};

// Create context
export const OrderContext = React.createContext();

// Context provider component
const OrderProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <OrderContext.Provider value={[ state, dispatch ]}>
            {children}
        </OrderContext.Provider>
    );
};

export default OrderProvider;
