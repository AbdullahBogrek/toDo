import { useState, useEffect } from "react";
import axios from "axios";

import { useTheme } from "../contexts/ThemeContext";
import { useForm } from "../contexts/FormContext"
import DeleteModal from "../components/DeleteModal";
import UpdateToDoModal from "./UpdateToDoModal";

function List() { 
  const [isLoading, setIsLoading] = useState(false);
  const [ isChecked, setIsChecked ] = useState(false)
  const { darkTheme } = useTheme();
  const { todos, setTodos, isChanged } = useForm();

  useEffect(() => {
    getTodos(localStorage.getItem("id")) 
  }, [isChanged])

  const getTodos = async (id) => {
    setIsLoading(true);
    await axios.get(`https://6319ae198e51a64d2be99876.mockapi.io/users/${String(id)}/todos`)
      .then(res => setTodos(res.data))
      .catch(err => console.log(err))
    setIsLoading(false);
  }

  const updateTodoStatus = async (user_id, to_do_id, data) => {
    await axios({
      method: "PUT",
      url: `https://6319ae198e51a64d2be99876.mockapi.io/users/${String(user_id)}/todos/${String(to_do_id)}`,
      data: { isCompleted: data }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  const markCompleted = id => {
    setTodos(
      todos.map(el =>
        el.id === id ? { ...el, isCompleted: !el.isCompleted } : el  
      )
    )
  }
 
  return (
    <div className="mt-2 mb-5 col-lg-10">
      <h5>Today</h5>
      <hr />
      { isLoading ? "Loading..." : (
                todos.map((toDo) => (
                  <div className="form-check d-flex align-items-center" key={toDo.id}>
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      checked={toDo.isCompleted}
                      onChange={() => {
                        markCompleted(toDo.id)
                        updateTodoStatus(toDo.userId, toDo.id, !toDo.isCompleted)
                      }}
                      id="flexCheckDefault"
                    />
                    <div
                      className={`container ${darkTheme ? "dark-input" : ""} ${
                        !toDo.isCompleted ? (
                          ""
                        ) : [
                          darkTheme ? "dark-completed" : "light-completed"
                        ]
                      } shadow-lg p-4 my-2 rounded`}
                    >
                      <div className="row d-flex justify-content-end">
                        <div className="col-10">{toDo.todo}</div>
                        <div className="col-2 d-flex justify-content-end align-items-center">
                          {toDo.isCompleted ? (
                            ""
                          ) : (
                            <>
                              <UpdateToDoModal toDo={toDo} />
                            </>
                          )}
                          <DeleteModal toDo={toDo}/>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
      )}
    </div>
  );
}

export default List;