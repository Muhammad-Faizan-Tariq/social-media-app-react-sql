import "./style.scss"
import { Link } from "react-router-dom"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ContrastRoundedIcon from '@mui/icons-material/ContrastRounded';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="left">
            <Link to="/" style={{textDecoration: "none"}}>
                <span>Social Media</span>
            </Link>
            <HomeRoundedIcon/>
            <ContrastRoundedIcon/>
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
            <img src="https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user"/>
            <span>John Doe</span>
          </div>
        </div>
    </div>
  )
}

export default Navbar