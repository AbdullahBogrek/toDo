import { useState } from "react"
import axios from "axios"

import { useTheme } from "../contexts/ThemeContext"
import { useForm } from "../contexts/FormContext"
import { postToDo } from "../Api"

function Form() {
  const { darkTheme } = useTheme()
  const [ toDo, setToDo ] = useState("")
  const { setToDos } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault()
    postToDo(toDo, localStorage.getItem("id"))
    setToDo("")
    getToDos(localStorage.getItem("id"))
  }

  const getToDos = async (id) => {
    await axios.get(`https://6319ae198e51a64d2be99876.mockapi.io/users/${String(id)}/todos`)
    .then(res => setToDos(res.data))
    .catch(err => console.log(err))
  }
  
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-8 input-area'>
          <form onSubmit={handleSubmit}>
            <div className='row'>          
              <div className='col-md-10 d-flex justify-content-start'>
                <input className={`form-control p-3 ${darkTheme ? "dark-input" : ""} shadow-lg`} onChange={(e) => setToDo(e.target.value)} value={toDo} type="text" placeholder="Add a to do" minLength="3" required/>
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
      </div>
    </div>
  )
}

export default Form