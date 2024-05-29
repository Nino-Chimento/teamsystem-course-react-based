
import { useState } from "react";
import { useGetData } from "../Hooks/useGetData"
import Todo from "./Components/Todo";
import CreateTodo from "./Components/CreateTodo";
export const URL = 'https://jsonplaceholder.typicode.com/todos'
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();
    const { data: todos, loading, error, setData } = useGetData(URL)

    const [todoSelected, setTodoSelected] = useState(null)
    const [todoUpdate, setTodoUpdate] = useState({})
    const handleSelect = (id) => {
        setTodoSelected(id)
        navigate(`/todo/${id}`)
    }

    const handleUpdate = (todo) => {
        setTodoUpdate(todo)
    }

    const handleSenData = (todo) => {
        const newTodo = {
            completed: todo.completed,
            title: todo.title,
            userId: 1,
            id: Date.now()
        }
        setData(prev => [...prev, newTodo])

    }


    return (<>
        {loading && <div>loading</div>}
        {Object.keys(error).length > 0 && <div>error</div>}
        <CreateTodo todoUpdate={todoUpdate} senData={handleSenData} label="title" type="text" />
        {todos.length > 0 && todos.map(todo => {
            return < div key={todo.id}>
                <Todo
                    isSelected={todoSelected === todo.id}
                    handleClick={(handleSelect)}
                    handleUpdate={handleUpdate}
                    id={todo.id} title={todo.title} completed={todo.completed} />
            </div>
        })}
        <div>altri componenti</div>
    </>)
}

export default Home