import React, {Component} from 'react';
import List from './List.jsx';
import Form from './Form.jsx';

const App =() => {
    return (<div>
        <label>Articles</label>
        <List/>
        <label>Add new article</label>
        <Form/>

    </div>);
}

export default App;