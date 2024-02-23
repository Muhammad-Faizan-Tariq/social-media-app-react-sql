import "./style.scss"

const LeftBar = () => {
  return (
    <div className="leftbar">
        <div className="container">
        <div className="user">
            <img src="https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user"/>
            <span>John Doe</span>
          </div>
          <div className="item">
            <img src="" alt=""/>
            <span>Freinds</span>
          </div>
        </div>
    </div>
  )
}

export default LeftBar