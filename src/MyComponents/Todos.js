import React from 'react'
import TodoItem from './TodoItem'

function Todos(props) {
    let todosListStyle = {
        minHeight: "55.5vh"
    }

    return (
        <div className="container my-3" style={todosListStyle}>
            <h3 className="my-3">Todos List</h3>
            {
                props.todos.length > 0 ?
                    props.todos.map((todo) => {
                        return (
                            <div key={todo.sno}>
                                <TodoItem todo={todo} onDelete={props.onDelete} />
                                <hr />
                            </div>
                        )
                    }) : "No Todos to display"
            }


        </div >
    )
}

export default Todos
