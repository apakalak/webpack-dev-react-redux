import React, {Component} from 'react';
import {connect} from 'react-redux';
import uuidv1 from 'uuid';
import * as actionsCreators from '../actionCreators/index'

const mapDispatchToProps = (dispatch) => {
    return {
        addArticle : article => dispatch(actionsCreators.addArticle(article))
    };
}

class ConnectedForm extends Component{
    constructor(){
        super();
        this.state = {title:''};
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.setState({title : e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        let article = {name : this.state.title , id : uuidv1()};
        this.props.addArticle(article);
        this.setState({title:''})

    }
    render(){
        return (<form onSubmit={this.onSubmit}>
            <input type="text" id="txtArticle" value={this.state.title} onChange={this.onChange}/>
            <button type="submit">Add Article</button>
        </form>);
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;