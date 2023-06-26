import actionType from "../actionType";

const initialState = {
    postList: ''
}

const GlobalReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_POST:
            return {
                ...state, postList: action.payload
            }

        default: return state
    }
}

export default GlobalReducer;