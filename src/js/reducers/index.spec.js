import articleReducer from './articleReducer';
import comicsReducer from './comicsReducer';
import rootReducer from './index'

import * as actionCreators from '../actionCreators/index';

describe('rootReducer', ()=> {
    it('add an article, a comic', ()=>{
        let state = {
            articles: [{name:'a', id:1},{name:'b', id:2},{name:'c', id:3}],
            comics : [{name:'a', id:1},{name:'b', id:2},{name:'c', id:3}]
        };
        let newArticle = {name:'d', id:4};
        let newComic = {name:'d', id:4};
        let newArticleReducerState = articleReducer(state.articles, actionCreators.addArticle(newArticle));
        let newComicReducerState = comicsReducer(state.comics, actionCreators.addComic(newComic));
    });
})