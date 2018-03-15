import * as actionCreators from './index';
import * as actions from './actions';

describe('actionCreators', ()=> {
    it('addArticle', () => {
        let article = {name: 'test', id: 1}
        let action = actionCreators.addArticle(article);
        expect(action.type).toEqual(actions.ADD_ARTICLE);
        expect(action.data).toEqual(article);
    });

    it('addComic', () => {
        let comic = {name: 'test', id: 1}
        let action = actionCreators.addComic(comic);
        expect(action.type).toEqual(actions.ADD_COMIC);
    });
});