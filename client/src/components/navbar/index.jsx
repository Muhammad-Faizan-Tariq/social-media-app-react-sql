import "./style.scss"
import { Link } from "react-router-dom"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ContrastRoundedIcon from '@mui/icons-material/ContrastRounded';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {

  const {toggle} = useContext(DarkModeContext)
  const {currentUser} = useContext(AuthContext)
  return (
    <div className="navbar">
        <div className="left">
            <Link to="/" style={{textDecoration: "none"}}>
                <span>Social Media</span>
            </Link>
            <HomeRoundedIcon/>
            <ContrastRoundedIcon onClick={toggle}/>
            <WidgetsRoundedIcon/>
            <div className="search">
            <SearchRoundedIcon/>
            <input type="text" placeholder="search..."/>
            </div>
            </div>

        <div className="right">
          <PersonRoundedIcon/>
          <EmailRoundedIcon/>
          <NotificationsRoundedIcon/>
          <div className="user">
            <img src={currentUser.profilePic} alt="user"/>
            <span>{currentUser.name}</span>
          </div>
        </div>
    </div>
  )
}

export default Navbar