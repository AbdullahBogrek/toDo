import { useState } from "react"
import { Modal, Button } from 'react-bootstrap';
import axios from "axios";

import { useForm } from "../contexts/FormContext"

export default function DeleteModal({ toDo }) {
    const [show, setShow] = useState(false);
    const { toDos, setToDos } = useForm();

    const deleteToDo = async (user_id, to_do_id) => {
      await axios({
        method: "DELETE",
        url: `https://6319ae198e51a64d2be99876.mockapi.io/users/${String(user_id)}/todos/${String(to_do_id)}`
      })
    }

    const handleClick = () => {
      deleteToDo(toDo.userId, toDo.id)
      setToDos(toDos.filter(item => item.id !== toDo.id))
      setShow(false)
    }

    return (
      <>
        <a href="/#" onClick={() => setShow(true)}><i className="fa-regular fa-trash-can fa-lg"></i></a>
  
        <Modal show={show} onHide={() => setShow(false)} centered>
          <Modal.Body className="p-4 text-center rounded">
            <h5 class="mb-0">Do you want to delete this to do?</h5>
            <p class="mb-0">Deleted to do cannot be undone. Please make sure.</p>
          </Modal.Body>
          <Modal.Footer className="flex-nowrap p-0 rounded">
            <Button variant="none" className="btn btn-danger btn-lg fs-6 text-decoration-none col-6 m-0 border-end rounded-0" onClick={() => handleClick()}>
                <strong>Yes, delete</strong>
            </Button>
            <Button variant="none" onClick={() => setShow(false)} className="btn btn-light btn-lg fs-6 text-decoration-none col-6 m-0 rounded-0">
                No thanks
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
