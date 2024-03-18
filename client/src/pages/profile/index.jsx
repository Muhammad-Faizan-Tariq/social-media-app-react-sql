import "./style.scss"
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Posts from "../../components/posts";
import Share from "../../components/share"

const Profile = () => {
  // const {id} = usePararms()
  const { currentUser } = useContext(AuthContext)
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Cover Img" className="cover" />
        <img src={currentUser.profilePic} alt="Profile Img" className="profile" />
      </div>
      <div className="profileContainer">
        <div className="user-info">
          <div className="left">
            <a href="www.facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="www.instagram.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="www.twitter.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="www.linkedin.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="www.pinterest.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>{currentUser.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Lahore</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>myHero.com</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Share/>
        <Posts/>
      </div>
    </div>
  )
}

export default Profile