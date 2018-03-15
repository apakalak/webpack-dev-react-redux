import * as actions from '../actionCreators/actions';

const comicsReducer  = (state = [], action) => {
    switch (action.type){
        case actions.ADD_COMIC :
            return state.concat(action.data);
        default :
            return state;
    }
};

export default comicsReducer;