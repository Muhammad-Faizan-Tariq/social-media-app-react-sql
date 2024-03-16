import "./style.scss"
import Stories from "../../components/stories"
import Posts from "../../components/posts"

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Posts/>  
    </div>
  )
}

export default Home