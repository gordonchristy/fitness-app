import { configureStore } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
    redirectToUserInfoPage: false,
    // other initial state variables
};

// Action types
const REDIRECT_TO_USER_INFO_PAGE = 'app/REDIRECT_TO_USER_INFO_PAGE';

// Action creators
export const redirectToUserInfoPage = () => ({
    type: REDIRECT_TO_USER_INFO_PAGE
});

// Reducer function
const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case REDIRECT_TO_USER_INFO_PAGE:
            return {
                ...state,
                redirectToUserInfoPage: true,
            };
        default:
            return state;
    }
};

const store = configureStore({
    reducer: appReducer,
    // Optionally, you can include middleware here if needed
});

export default store;
