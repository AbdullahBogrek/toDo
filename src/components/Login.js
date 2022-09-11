import { useState } from "react"
import { Modal } from 'react-bootstrap';

import { useUser } from "../contexts/UserContext";
import { postUser } from "../Api"

export default function Login() {
    const [show, setShow] = useState(true);
    const { setUser } = useUser()

    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        postUser(capitalizeFirst(e.target[0].value))
        setUser(capitalizeFirst(e.target[0].value))
        setShow(false)
    }
 
    return (
      <>
        <Modal show={show} className="rounded-4 shadow" onHide={() => setShow(false)} centered size="md">
            <Modal.Header className="p-5 pb-4 border-bottom-0">
                <h4 class="fw-bold mb-0">Welcome to toDo</h4>
            </Modal.Header>
            <Modal.Body className="p-5 pt-0">
                <form onSubmit={handleSubmit}>
                    <div class="form-floating mb-3">
                        <input type="text" name="user" class="form-control rounded-3" id="floatingInput" placeholder="Abdullah" required/>
                        <label for="floatingInput">Please enter a name</label>
                    </div>
                    <button class="w-100 mb-2 mt-3 btn btn-md rounded-3 btn-success" type="submit">Kaydet</button>
                </form>
            </Modal.Body>
        </Modal>
      </>
    );
}