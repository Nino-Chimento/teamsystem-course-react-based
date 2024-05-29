

const Todo = ({ title, completed, handleClick, id, isSelected, handleUpdate }) => {

    return (
        <div style={{ backgroundColor: isSelected ? "red" : "" }} >
            <div>{title}</div>
            <div>{completed ? "completed" : "not completed"}</div>
            <button onClick={() => handleClick(id)}>selected</button>
            <button onClick={() => handleUpdate({ title, completed, id })}>selected</button>
        </div>)
}

export default Todo