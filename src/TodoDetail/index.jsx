import { Link, useParams } from "react-router-dom"
import { URL } from "../Home";
import { useGetData } from "../Hooks/useGetData";

const TodoDetail = () => {
    const { id } = useParams();
    const { data: todo, error } = useGetData(`${URL}/${id}`)


    return <>
        <Link to="/">go back</Link>
        <div>
            {Object.keys(error).length > 0 && <div>error</div>}
            <div>{todo.title}</div>
            <div>{todo.completed ? "completed" : ""}</div>
        </div>
    </>
}

export default TodoDetail