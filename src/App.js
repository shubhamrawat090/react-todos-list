import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import React, { useState, useEffect } from 'react';
import About from './MyComponents/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  // fetch from localstorage
  let initTodos;
  if (!localStorage.getItem("todos")) {
    initTodos = []
  } else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodos);

  const onDelete = (todo) => {
    // remember to use these functions at the end
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }


  const addTodo = (title, desc) => {
    console.log("I am adding this todo ", title, desc);
    let sno = (todos && todos.length > 0) ? todos[todos.length - 1].sno + 1 : 1;

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    // remember to use these functions at the end
    setTodos([...todos, myTodo]);
  }

  // store todos in cache(useEffect is used because useState updater doesn't immediately changes filteredTodos) 
  // WHENEVER todos is CHANGED this statement will run
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Routes>
          <Route path="/" element={
            <>
              {/* Render these two when '/' is our endpoint */}
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>}
          />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
