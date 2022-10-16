import React from 'react'
import TodoItem from './TodoItem'

function Todos(props) {
    let todosListStyle = {
        minHeight: "55.5vh"
    }

    return (
        <div className="container" style={todosListStyle}>
            <h3 className="my-3">Todos List</h3>
            {
                props.todos.length > 0 ?
                    props.todos.map((todo) => {
                        return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    }) : "No Todos to display"
            }


        </div >
    )
}

export default Todos
