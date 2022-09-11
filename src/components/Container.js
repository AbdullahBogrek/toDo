import Form from './Form'
import Header from './Header'
import List from './List'
import Login from "./Login"

import { useTheme } from '../contexts/ThemeContext'
import { useUser } from '../contexts/UserContext'

function Container() {
  const { darkTheme } = useTheme()
  const { user } = useUser()

  return (
    <div className={`app ${darkTheme ? "dark" : ""}`}>
      <div className="container mt-5">
        <div className='row'>
          { !user ? <Login /> : (
            <>
              <Header />
              <Form />
              <List />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Container