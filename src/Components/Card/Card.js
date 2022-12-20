import React from "react";
import "./card.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

function Card({ data }) {
  return (
    <div className="cardContainer">
      <div className="p-2">
        <div className="heading">
          <div className="firstPart">
            <div className="profileImage">
              <img src={data?.user?.profile_image?.small} />
            </div>
            <div className="nameDetails">
              <span className="name">{data?.user?.name}</span>
              <span
                style={{
                  marginLeft: "0.5rem",
                  textAlign: "center",
                  borderRadius: "50%",
                  height: "20px",
                  width: "20px",
                  lineHeight: "20px",
                  display: "inline-block",
                  backgroundColor: "rgb(206, 58, 196)",
                }}
              >
                <FavoriteSharpIcon
                  style={{
                    color: "white",
                    fontSize: "1rem",
                    marginTop: "-2px",
                  }}
                />
              </span>

              <FiberManualRecordIcon
                style={{ fontSize: "0.5rem", marginLeft: "0.5rem" }}
              />
              <span className="follow">follow</span>
              <div className="time">38 minutes ago</div>
            </div>
          </div>
          <div>
            <MoreVertIcon />
          </div>
        </div>
        <div className="imagePlaceholder">
          <img src={data?.urls?.small} className="image" />
        </div>
        <div className="photoActionContainer">
          <div className="photoAction">
            <FavoriteBorderIcon /> <span>0 </span>
            <ChatBubbleOutlineIcon /> <span>0 </span>
            <span> $0.00 tips</span>
          </div>
          <div className="bookmark">
            <BookmarkBorderIcon />
          </div>
        </div>
        <div
          className="name"
          style={{ fontSize: "smaller", marginBottom: "1rem" }}
        >
          {data?.user?.name}
        </div>
        <div className="viewAllComment">View All Comments</div>
        <div className="addAComment">Add a comment</div>
      </div>
    </div>
  );
}

export default Card;
