import "./style.scss"
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const menu = [
  {
    img: Friends,
    label: "Friends"
  },
  {
    img: Groups,
    label: "Groups"
  },
  {
    img: Market,
    label: "Market"
  },
  {
    img: Watch,
    label: "Watch"
  },
  {
    img: Events,
    label: "Events"
  },
  {
    img: Memories,
    label: "Memories"
  },
  {
    img: Gaming,
    label: "Gaming"
  },
  {
    img: Gallery,
    label: "Gallery"
  },
  {
    img: Events,
    label: "Events"
  },
  {
    img: Videos,
    label: "Videos"
  },
  {
    img: Messages,
    label: "Messages"
  },
  {
    img: Tutorials,
    label: "Tutorials"
  },
  {
    img: Courses,
    label: "Courses"
  },
  {
    img: Fund,
    label: "Fund"
  }
]

const LeftBar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="user" />
            <span>{currentUser.name}</span>
          </div>
            {menu.slice(0,6).map(item=>(
              <div className="item" key={item.label}>
              <img src={item.img} alt="icon" />
              <span>{item.label}</span>
            </div>
            ))}
            <hr/>
            <div className="menu">
              <span>Your Shortcuts</span>
              {menu.slice(7,11).map(item=>(
              <div className="item" key={item.label}>
              <img src={item.img} alt="icon" />
              <span>{item.label}</span>
            </div>
            ))}
            </div>
            <hr/>
            <div className="menu">
              <span>Others</span>
              {menu.slice(12).map(item=>(
              <div className="item" key={item.label}>
              <img src={item.img} alt="icon" />
              <span>{item.label}</span>
            </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar