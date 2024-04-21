//This reducer helps managed state updates in react using the Redux library. Not sure if I should use user.name in the deleteUser case or user.id.



const appReducer = (state, action) => {
    let newState = { ...state };
    const { type, payload } = action;

    switch (type) {
        case 'nameChange':
            newState.user.name = payload;
            return newState;
        case 'deleteUser':
            // Filter out the user with the specified name
            newState.user = newState.user.filter(user => user.name !== payload);
            return newState;
        default:
            console.log('No type matched ', type);
            return newState;
    }
}

export default appReducer;