import {createStore} from 'redux';
import rootReducer from '../reducers/index';
// import * as actions from '../actionCreators/index'

const store = createStore(rootReducer);

// window.store = store;
// window.rootReducer = rootReducer;
// window.addArticle = actions.addArticle;
// window.addComic = actions.addComic;

export default store;