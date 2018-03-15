import comicsReducer from './comicsReducer';
import * as actionCreators from '../actionCreators/index';

describe('comicsReducer', ()=> {
    it('add comic', ()=>{
        let state = [{name:'a', id:1}, {name:'b', id:2}, {name:'c', id:3}];
        let newComic = {name:'d', id:4};
        let newState = comicsReducer(state, actionCreators.addComic(newComic));
        expect(newState.length).toEqual(4);
        expect(newState).not.toEqual(state);
    })
})