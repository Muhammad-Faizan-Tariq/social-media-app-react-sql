import "./style.scss"
import Stories from "../../components/stories"
import Posts from "../../components/posts"
import Share from "../../components/share"

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Share/>
      <Posts/>  
    </div>
  )
}

export default Home