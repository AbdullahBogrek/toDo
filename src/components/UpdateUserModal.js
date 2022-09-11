import { useState } from "react"
import { Modal } from 'react-bootstrap';

import { useUser } from "../contexts/UserContext";
import { putUser } from "../Api"

export default function UpdateUserModal() {
    const [show, setShow] = useState(false);
    const { user, setUser } = useUser()

    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        putUser(capitalizeFirst(e.target[0].value), localStorage.getItem("id"))
        setUser(capitalizeFirst(e.target[0].value))
        setShow(false)
    }

    return (
      <>
        <a href="/#" onClick={() => setShow(true)}><i class="fa-regular fa-pen-to-square ms-2 fa-xs"></i></a>
        
        <Modal show={show} className="rounded-4 shadow" onHide={() => setShow(false)} centered size="md">
            <Modal.Header className="p-5 pb-4 border-bottom-0">
                <h4 class="fw-bold mb-0">Update your name</h4>
                <button type="button" class="btn-close" onClick={() => setShow(false)} data-bs-dismiss="modal" aria-label="Close"></button>
            </Modal.Header>
            <Modal.Body className="p-5 pt-0">
                <form onSubmit={handleSubmit}>
                    <div class="form-floating mb-3">
                        <input type="text" name="user" class="form-control rounded-3" id="floatingInput" placeholder="Abdullah" />
                        <label for="floatingInput">{ user }</label>
                    </div>
                    <button class="w-100 mb-2 mt-3 btn btn-md rounded-3 btn-success" type="submit">Kaydet</button>
                </form>
            </Modal.Body>
        </Modal>
      </>
    );
}