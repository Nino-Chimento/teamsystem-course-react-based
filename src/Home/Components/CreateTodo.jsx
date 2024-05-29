import { useState, useEffect } from "react"

const DEFAULT_DATA = { title: "", completed: false, description: "" }

const CreateTodo = ({ type, label, senData, todoUpdate }) => {
    console.log(todoUpdate);

    const [dataForm, setDataForm] = useState(DEFAULT_DATA)

    useEffect(() => {
        setDataForm(todoUpdate)


    }, [todoUpdate])


    const handleChange = (e) => {
        const inputName = e.target.name;
        setDataForm(prev => { return { ...prev, [inputName]: e.target.value } })
    }

    const handleChangeChecked = (e) => setDataForm(prev => { return { ...prev, completed: e.target.checked } })
    const handleSendData = () => {
        setDataForm(DEFAULT_DATA)
        senData && senData(dataForm)
    }
    return <>

        <label htmlFor="title">{label}</label>
        <input value={dataForm.title} onChange={handleChange} name="title" id={label} type={type} />
        <input value={dataForm.description} onChange={handleChange} name="description" id="description" type={type} />
        <input checked={dataForm.completed} name="completed" type="checkbox" onChange={handleChangeChecked} />
        <button onClick={handleSendData} disabled={!dataForm.title}>send data</button>
    </>
}

export default CreateTodo