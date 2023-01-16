import React from "react";
import { IReceipt } from "../../App";
import { Card } from "./styles";
import like from "../../Assets/img/like.svg";
import dislike from "../../Assets/img/dislike.svg";
import { useNavigate } from "react-router-dom";

interface IRCProps {
  receipt: IReceipt;
}

const ReceiptCard: React.FC<IRCProps> = ({ receipt }) => {
  const navigate = useNavigate();

  const cardClickHandler = () => {
    navigate(`/receipt/${receipt.id}`);
  };

  return (
    <Card onClick={cardClickHandler}>
      <div className="img">
        <img src={receipt.img} alt={receipt.title} />
      </div>
      <div className="title">
        <h3>{receipt.title}</h3>
      </div>
      <div className="rating">
        <div className="like">
          <i>
            <img src={like} alt="like" />
          </i>
          <p>{receipt.ratings.like}</p>
        </div>
        <div className="dislike">
          <i>
            <img src={dislike} alt="dislike" />
          </i>
          <p>{receipt.ratings.dislike}</p>
        </div>
      </div>
    </Card>
  );
};

export default ReceiptCard;
