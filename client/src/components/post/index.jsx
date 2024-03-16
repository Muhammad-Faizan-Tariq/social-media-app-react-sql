import "./style.scss"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "@mui/material";

const Post = ({ post }) => {
  const liked = false;
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} />
            <div className="details">
              <Link to={`/profile/${post.userId}`} style={{ TextDecoder: "none", color: "inherit" }}>
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">01 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} />
        </div>
        <div className="info">
          <div className="item">{liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
          12 Likes</div>
          <div className="item"><TextsmsOutlinedIcon /> Comments</div>
          <div className="item"><ShareOutlinedIcon /> Share</div>
        </div>
      </div>
    </div>
  )
}

export default Post