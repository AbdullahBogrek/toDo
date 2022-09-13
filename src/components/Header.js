import { useTheme } from "../contexts/ThemeContext"
import UpdateUserModal from "./UpdateUserModal"
import { useUser } from "../contexts/UserContext"

function Header() {
  const { darkTheme, setDarkTheme } = useTheme()
  const { user } = useUser()

  return (
      <>
        <div className="col-lg-10 d-flex justify-content-between align-items-center">
          <h1 className='title'>toDo</h1>
          <a href="/#" onClick={() => setDarkTheme(!darkTheme)}>
            {
              darkTheme ? <i className="fa-regular fa-sun fa-lg"></i> : <i className="fa-regular fa-moon fa-lg"></i>
            } 
          </a>
        </div>
        <div className="col-lg-10">
          <h5 className='greeting mt-3'>😉 Hello {user} <UpdateUserModal /></h5>
        </div>
        <div className="col-lg-10">
          <div className="col-lg-7">
              <p className='description'>Plan your day by adding the tasks you have to complete today. You can change your list, add new tasks, or take off finished ones. Let's start.</p>
          </div>
        </div>
    </>
  )
}

export default Header