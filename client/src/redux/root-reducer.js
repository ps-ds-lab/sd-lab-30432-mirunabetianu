import {combineReducers} from 'redux';
import userReducer from "./user/user.reducer";
import directoryReducer from "./directory/directory.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    directory: directoryReducer
});

export default rootReducer;