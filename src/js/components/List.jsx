import React, {Component} from 'react';
import {connect} from 'react-redux';


const mapStateToProps = (state) =>{
    return {articles : state.articleReducer};
};

const ConnectedList = (data) => {
    return (<ul>
        {
            data.articles.map(e => {
                return <li key={e.id}>{e.name}</li>
            })
        }
    </ul>);
}
const List = connect(mapStateToProps, null)(ConnectedList);

export default List;