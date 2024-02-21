import { useParams } from "react-router-dom"
import "./style.scss"

const Profile = () => {
  const {id} = useParams()
  return (
    <div className='profile'>Profile {id}</div>
  )
}

export default Profile