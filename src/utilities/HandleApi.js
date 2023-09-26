import axios from 'axios'

const baseURL = "https://todo-app-backend-7zt5.onrender.com"

const getAllToDos = (setToDo) => {
    axios
        .get(baseURL)
        .then(({ data }) => {
            setToDo(data)
        })
}

const addToDo = (text, setText, setToDo) => {
    axios
        .post(`${baseURL}/save`, {text})
        .then(({ data }) => {
            console.log(data)
            setText("")
            getAllToDos(setToDo)
        })
        .catch((err) => console.log(err))
}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    axios
        .post(`${baseURL}/update`, {_id: toDoId, text})
        .then(({ data }) => {
            console.log(data)
            setText("")
            setIsUpdating(false)
            getAllToDos(setToDo)
        })
        .catch((err) => console.log(err))
}

const deleteToDo = (_id, setToDo) => {
    axios
        .post(`${baseURL}/delete`, { _id })
        .then(({ data }) => {
            console.log(data)
            getAllToDos(setToDo)
        })
        .catch((err) => console.log(err))
}

export { getAllToDos, addToDo, updateToDo, deleteToDo }