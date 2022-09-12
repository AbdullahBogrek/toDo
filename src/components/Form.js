import { useState } from "react"
import axios from "axios"

import { useTheme } from "../contexts/ThemeContext"
import { useForm } from "../contexts/FormContext"
import { postTodo } from "../Api"

function Form() {
  const { darkTheme } = useTheme()
  const [ todo, setTodo ] = useState("")
  const { setTodos, isChanged, setIsChanged } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault()
    postTodo(todo, localStorage.getItem("id"))
    setTodo("")
    fetchTodos(localStorage.getItem("id"))
    setIsChanged(!isChanged)
  }

  const fetchTodos = async (id) => {
    await axios.get(`https://6319ae198e51a64d2be99876.mockapi.io/users/${String(id)}/todos`)
    .then(res => setTodos(res.data))
    .catch(err => console.log(err))
  }
  
  return (
    <>
        <div className='col-lg-10 input-area'>
          <form onSubmit={handleSubmit}>
            <div className='row'>          
              <div className='col-md-8 d-flex justify-content-start'>
                <input className={`form-control p-3 ${darkTheme ? "dark-input" : ""} shadow-lg`} onChange={(e) => setTodo(e.target.value)} value={todo} type="text" placeholder="Add a to do" minLength="3" required/>
                <button className="btn btn-warning p-3 shadow-lg" type="submit" id="button-addon2">Add</button>
              </div>
              <div className='col-md-2 filter'>
                <select className={`form-select p-3 ${darkTheme ? "dark-input" : ""} shadow-lg`}>
                  <option value="all" defaultValue>All</option>
                  <option value="completed">Completed</option>
                  <option value="processing">Processing</option>
                </select>
              </div>
            </div>
          </form>
        </div>
    </>
  )
}

export default Form