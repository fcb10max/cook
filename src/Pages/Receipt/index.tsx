import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { IReceipt } from "../../App";
import {
  ReceiptC,
  ReceiptContents,
  ReceiptDesc,
  ReceiptImg,
  ReceiptInfo,
  ReceiptRatings,
  ReceiptTime,
  ReceiptTitle,
  ReceiptWrapper,
} from "./styles";
import like from "../../Assets/img/like.svg";
import dislike from "../../Assets/img/dislike.svg";

interface IReceiptComponentProps {
  receipts: IReceipt[];
}

const Receipt: React.FC<IReceiptComponentProps> = ({ receipts }) => {
  const { id } = useParams();
  if (!id || isNaN(parseInt(id)))
    throw new ReferenceError("Invalid receipt id");
  const currReceipt = receipts.find((i) => parseInt(id) === i.id);

  return currReceipt ? (
    <ReceiptC>
      <ReceiptWrapper>
        <ReceiptImg>
          <img src={currReceipt.img} alt={currReceipt.title} />
        </ReceiptImg>
        <ReceiptInfo>
          <ReceiptTitle>{currReceipt.title}</ReceiptTitle>
          <ReceiptDesc>{currReceipt.description}</ReceiptDesc>
          <ReceiptContents>
            <h3>Ингредиенты:</h3>
            <ul>
              {currReceipt.compositions.map((i, idx) => (
                <li key={idx}>
                  {i.name} - {i.count}
                </li>
              ))}
            </ul>
          </ReceiptContents>
          <ReceiptTime>
            <h3>Время приготовления:</h3>
            <p>{currReceipt.time} минут</p>
          </ReceiptTime>
          <ReceiptRatings>
            <h3>Оценки:</h3>
            <div>
              <div>
                <i>
                  <img src={like} alt="like" />
                </i>
                <p>{currReceipt.ratings.like}</p>
              </div>
              <div>
                <i>
                  <img src={dislike} alt="dislike" />
                </i>
                <p>{currReceipt.ratings.dislike}</p>
              </div>
            </div>
          </ReceiptRatings>
        </ReceiptInfo>
      </ReceiptWrapper>
    </ReceiptC>
  ) : (
    <Navigate to={"/not_found"} />
  );
};

export default Receipt;
