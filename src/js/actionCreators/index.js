import * as ACTIONS from './actions';

export const addArticle = (article) => {
    return {type: ACTIONS.ADD_ARTICLE, data: article}
};

export const addComic = (comic) => {
    return {type: ACTIONS.ADD_COMIC, data: comic}
}