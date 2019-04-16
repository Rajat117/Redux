const initialState = {
    user: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN": {
            console.log(action.payload);
            return {
                ...state,
                user: action.payload
            };
        }
        default: {
            return state;
        }
    }
};
