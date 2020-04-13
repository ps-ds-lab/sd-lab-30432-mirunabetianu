import DirectoryActionTypes from "./directory.types";
const INITIAL_STATE = {
    sections: [],
    isFetching: false,
    error: undefined
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type)
    {
        case DirectoryActionTypes.FETCH_CATEGORIES_START:
            return{
                ...state,
                isFetching: true
            };
        case DirectoryActionTypes.FETCH_CATEGORIES_SUCCESS:
            return{
                ...state,
                isFetching: false,
                sections: action.payload
            };
        case DirectoryActionTypes.FETCH_CATEGORIES_FAILURE:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default directoryReducer;