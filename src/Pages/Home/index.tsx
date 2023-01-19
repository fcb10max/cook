import React from "react";
import { Link } from "react-router-dom";
import { Hero, HomeC, HomeWrapper, LastReceipts } from "./styles";
import { IReceipt } from "../../App";
import ReceiptCard from "../../Components/ReceiptCard";

interface IHomeProps {
  receipts: IReceipt[];
}

const Home: React.FC<IHomeProps> = ({ receipts }) => {
  return (
    <HomeC>
      <HomeWrapper>
        <Hero>
          <Link to="/receipts">Все рецепты</Link>
        </Hero>
        <LastReceipts>
          {receipts.map((receipt) => (
            <ReceiptCard receipt={receipt} key={receipt.id} />
          ))}
        </LastReceipts>
      </HomeWrapper>
    </HomeC>
  );
};

export default Home;
