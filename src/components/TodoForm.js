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
        <div className='Form'>
        <form onSubmit={this.submitForm}>
            <input 
            className='Add-line'
                 onChange ={this.handleChanges}   
                 type='text' name='task' value ={this.state.keyword} />
            <button className='Add'>Add</button>
        </form>
        </div>
    )
}
}

export default TodoForm