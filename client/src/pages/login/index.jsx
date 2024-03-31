import { Link, useNavigate } from "react-router-dom"
import "./style.scss"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/authContext"

const Login = () => {
  const {login} = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  })
  const [error, setError] = useState(null)
  const navigate = useNavigate();

  const handleChange = (e) => {
      const {name, value} = e.target;
      setInputs((prev)=>({...prev, [name]:value}))
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs)
      navigate("/")
    } catch (error) {
      console.log("Login Error:", error.response);
      setError(error.response.data)
    }
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
            <input type="text" placeholder="username" name="username" onChange={handleChange}/>
            <input type="password" placeholder="password" name="password" onChange={handleChange} />
            {error && <div>({error})</div>}
            <button onClick={handleLogin}>login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login