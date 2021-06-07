import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import axios from 'axios';

// Axios Instance
const ai = axios.create({
  baseURL: 'http://localhost:8000/api/'
})


function App() {
  const [Todo, setTodo] = useState([]);

  // Retrieve data
  const retrieveItem = async () => {
    const response = await ai.get("/list");
    return response.data;
  }

  const addTodoHandler = async (todo) => {
    const request = {
      id: uuid(),
      ...todo,
    };
    const response = await ai.post("/create/", request);
    console.log(response);
    setTodo([...Todo, response.data]);
  };

  const removeTodo = async (id) => {
    await ai.delete(`/delete/${id}`);
    const newTodoList = Todo.filter((todo) => {
      return todo.id !== id;
    });

    setTodo(newTodoList);
  };

  useEffect(() => {
    const getAllItem = async () => {
      const allItems = await retrieveItem();
      if (allItems) setTodo(allItems)
    }
    getAllItem();
  }, []);

  return (
    <div className="ui container">
      <Header />
      <AddTodo addTodoHandler={addTodoHandler} />
      <TodoList Todo={Todo} getTodoId={removeTodo} />
    </div>
  );
}

export default App;
