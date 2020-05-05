import React from 'react';
// import { render } from '@testing-library/react';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state ={
            keyword: ''
        }
    }


handleChanges = (e) =>{
    this.setState(
        {
        keyword: e.target.value
    },() => console.log('this is a keyword',this.state.keyword))
}

submitForm = (e) =>{
    e.preventDefault();
    this.props.addTodo(this.state.keyword);
    this.setState({
        keyword:''
    })
}

render(){
    return(
        <form onSubmit={this.submitForm}>
            <input
                 onChange ={this.handleChanges}   
                 type='text' name='task' value ={this.state.keyword} />
            <button>Add</button>
        </form>
    )
}
}

export default TodoForm