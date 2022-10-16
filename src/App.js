import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import { useState } from 'react'

function App() {
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the gym",
      desc: "You need to go to the gym to get this job done"
    },
    {
      sno: 3,
      title: "Go to the book store",
      desc: "You need to go to the book store to get this job done"
    },
  ]);

  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <AddTodo />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
