import { useState } from "react"
import { Modal } from 'react-bootstrap';
import axios from "axios"

import { useForm } from "../contexts/FormContext"

export default function UpdateToDoModal({ toDo }) {
    const [show, setShow] = useState(false);
    const { toDos, setToDos } = useForm();

    const updateToDoData = async (user_id, to_do_id, data) => {
        await axios({
          method: "PUT",
          url: `https://6319ae198e51a64d2be99876.mockapi.io/users/${String(user_id)}/todos/${String(to_do_id)}`,
          data: { todo: data }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateToDoData(toDo.userId, toDo.id, e.target.todo.value)
        setToDos(
            toDos.map(el =>
              el.id === toDo.id ? { ...el, todo: e.target.todo.value } : el  
            )
        )
        setShow(false)
    }

    return (
      <>
        <a href="/#" onClick={() => setShow(true)}><i className="fa-regular fa-pen-to-square fa-lg me-4"></i></a>
        
        <Modal show={show} className="rounded-4 shadow" onHide={() => setShow(false)} centered size="lg">
            <Modal.Header className="p-5 pb-4 border-bottom-0">
                <h2 className="fw-bold mb-0">Update to do</h2>
                <button type="button" className="btn-close" onClick={() => setShow(false)} data-bs-dismiss="modal" aria-label="Close"></button>
            </Modal.Header>
            <Modal.Body className="p-5 pt-0">
                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control rounded-3" name="todo" id="floatingInput" placeholder="Please add a to do" />
                        <label htmlFor="floatingInput">{toDo.todo}</label>
                    </div>
                    <button className="w-100 mb-2 mt-3 btn btn-md rounded-3 btn-success" type="submit">Kaydet</button>
                </form>
            </Modal.Body>
        </Modal>
      </>
    );
}