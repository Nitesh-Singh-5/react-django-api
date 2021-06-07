import React from "react";
import ContactCard from "./ContactCard";

const TodoList = (props) => {
  console.log(props);

  const deleteTodoHandler = (id) => {
    props.getTodoId(id);
  };
  const renderTodoList = props.Todo.map((Todo) => {
    return (
      <ContactCard
        Todo={Todo}
        clickHander={deleteTodoHandler}
        key={Todo.id}
      />
    );
  });
  return <div className="ui celled list">{renderTodoList}</div>;
};

export default TodoList;
