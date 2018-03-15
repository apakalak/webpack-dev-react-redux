import {combineReducers} from 'redux';
import articleReducer from './articleReducer';
import comicsReducer from './comicsReducer';


//The second principle of Redux says the only way to change the state is by sending a signal to the store.
//The third principle of Redux says that the state is immutable and cannot change in place.

// There are two key points for avoiding mutations in Redux:
//
// Using concat(), slice(), and …spread for arrays
// Using Object.assign() and …spread for objects

// with combineReducers, each reducer will just take care of its individual state.
// All reducers are ocmbined to an object y this function.
const rootReducer = combineReducers({
    articleReducer,
    comicsReducer
});


export default rootReducer;