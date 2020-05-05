import React from 'react';

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'


const getDone = [
{
  task: 'Finish Classwork',
  id: 15258694,
  completed: false
},
{
task: 'Try Stretch',
id: 79632897,
completed: false
}
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state ={
      getDone
    }
    // this.addTodo = this.addTodo.bind(this)
  }

  addTodo = (todoTask) => {
  
  const newTodo ={
    task: todoTask,
    id: Date.now(),
    completed: false
  };
  this.setState({
    getDone:[...this.state.getDone, newTodo]
  });
}


removeTodo = e =>{
e.preventDefault()
const getDone = this.state.getDone.filter(todo => !todo.completed)
this.setState({getDone})
}

toggleItem = clickedID =>{
  const newGetdone = this.state.getDone.map(task =>{
    if (task.id === clickedID){
      return{
        ...task,
        completed: !task.completed
      }
  } else{
    return task
  }
})



this.setState({
  getDone: newGetdone
})
}
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        
        <TodoForm addTodo ={this.addTodo} />
        
        <TodoList
         getDone ={this.state.getDone} 
         toggleItem={this.toggleItem}
         removeTodo ={this.removeTodo} />
      </div>
    );
  }
}

export default App;
