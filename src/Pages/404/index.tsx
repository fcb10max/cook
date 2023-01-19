import React from "react";
import { Link } from "react-router-dom";
import { NFWrapper, NotFoundC } from "./styles";

const NotFound = () => {
  return (
    <NotFoundC>
      <NFWrapper>
        <div>
          <h1>404</h1>
          <h3>Страница на найдена</h3>
          <Link to="/">Главная страница</Link>
        </div>
      </NFWrapper>
    </NotFoundC>
  );
};

export default NotFound;
