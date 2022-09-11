import { useTheme } from "../contexts/ThemeContext"
import UpdateUserModal from "./UpdateUserModal"
import { useUser } from "../contexts/UserContext"

function Header() {
  const { darkTheme, setDarkTheme } = useTheme()
  const { user } = useUser()

  return (
    <div>
      <div class="col-lg-10 d-flex justify-content-between align-items-center">
        <h1 className='title'>toDo</h1>
        <a href="/#" onClick={() => setDarkTheme(!darkTheme)}>
          {
            darkTheme ? <i class="fa-regular fa-sun fa-lg"></i> : <i class="fa-regular fa-moon fa-lg"></i>
          } 
        </a>
      </div>
      <h5 className='greeting mt-3'>😉 Hello {user} <UpdateUserModal /></h5>
      <div className='col-lg-6'>
        <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
      </div>
    </div>
  )
}

export default Header