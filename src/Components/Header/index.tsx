import React from "react";
import { HeaderC, HeaderLogo, HeaderNavbar, HeaderWrapper } from "./styles";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const Header = () => {
  return (
    <HeaderC>
      <HeaderWrapper>
        <HeaderLogo>
          <Logo />
        </HeaderLogo>
        <HeaderNavbar>
          <ul>
            <li>
              <Link to="/receipts">Рецепты</Link>
            </li>
            <li>
              <Link to="/about">Обо мне</Link>
            </li>
          </ul>
        </HeaderNavbar>
      </HeaderWrapper>
    </HeaderC>
  );
};

export default Header;
