import React from 'react';
import {connect} from 'redux';
import allTodos from '../../reducers/selectors';
import TodoListItem from '../../todo_list/todo_list_item';

class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.prop = props;  
  }

  render(){
    return(
      <ul>
        {
        this.props.todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo}/>
        ))
       }
      </ul>
    );
  }


}


export default TodoList;
