import articleReducer from './articleReducer';
import * as actionCreators from '../actionCreators/index';

describe('articleReducer', ()=> {
    it('add article', ()=>{
        let state = [{name:'a', id:1},{name:'b', id:2},{name:'c', id:3}];
        let newArticle = {name:'d', id:4};
        let newState = articleReducer(state, actionCreators.addArticle(newArticle));
        expect(newState.length).toEqual(4);
        expect(newState).not.toEqual(state);
    })
})