import { useState, useEffect } from "react"

export const useGetData = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const [error, setError] = useState({})

    useEffect(() => {
        const fetchTodos = async () => {
            fetch(url)
                .then(response => response.json())
                .then(json => setData(json)).catch(error => setError(error))
        }
        try {
            setLoading(true)
            fetchTodos()
            setLoading(false)
        } catch (error) {
            console.log(error);
            setError(error)
        }



    }, [])

    return { data, loading, error, setData }
}