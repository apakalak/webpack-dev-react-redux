import * as actions from '../actionCreators/actions';

const articleReducer  = (state = [], action) => {
    switch (action.type){
        case actions.ADD_ARTICLE :
            // return Object.assign({}, state, {articles : state.articles.concat(action.data)});
            return state.concat(action.data);
        default :
            return state;
    }
};

export default articleReducer;