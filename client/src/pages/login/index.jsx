import { Link } from "react-router-dom"
import "./style.scss"
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"

const Login = () => {
  const {login} = useContext(AuthContext);

  const handleLogin = () => {
    login()
  }
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Social with Peoples</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <span>Don't have an account</span>
          <Link to="/register">
          <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button onClick={handleLogin}>login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login