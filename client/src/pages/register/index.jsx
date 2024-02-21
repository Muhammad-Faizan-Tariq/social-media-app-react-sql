import { Link } from "react-router-dom"
import "./style.scss"

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Social with Peoples</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <span>Do have an account</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register