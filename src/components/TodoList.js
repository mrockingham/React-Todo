// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'


const TodoList = props =>{
console.log('what are the props',props.removeTodo)

    return(

        <div className ="Todo-list"> 
        <div>
        {props.getDone.map(todo => (
            <Todo key={todo.id} todo ={todo} toggleItem={props.toggleItem} />
        ))}</div>
        <button className = 'clear-list' onClick= {props.removeTodo}>Clear Items</button>

        </div>
        
    )
}

export default TodoList