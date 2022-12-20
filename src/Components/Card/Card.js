import React from "react";
import "./card.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";

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
              <div className="name">{data?.user?.name}</div>
              <FavoriteSharpIcon />
              <div className="time">38 minutes ago</div>
            </div>
          </div>
          <div>
            <MoreVertIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
