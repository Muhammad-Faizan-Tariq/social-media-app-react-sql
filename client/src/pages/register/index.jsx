import "./style.scss"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Register = () => {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: ""
  })
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleChange = (e) => {
      const {name, value} = e.target;
      setInputs((prev)=>({...prev, [name]:value}))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8000/api/auth/register", inputs)
      navigate("/")
    } catch (error) {
      setError(error.response.data)
    }
  }

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
            <input type="text" placeholder="username" name="username" onChange={handleChange} />
            <input type="email" placeholder="Email" name="email" onChange={handleChange} />
            <input type="password" placeholder="password" name="password" onChange={handleChange} />
            <input type="text" placeholder="Name" name="name" onChange={handleChange} />
            {error && <div>({error})</div>}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register