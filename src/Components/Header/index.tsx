import React from "react";
import { HeaderC, HeaderLogo, HeaderNavbar, HeaderWrapper } from "./styles";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const Header = () => {
  return (
    <HeaderC>
      <HeaderWrapper>
        <HeaderLogo>
          <Logo/>
        </HeaderLogo>
        <HeaderNavbar>
          <ul>
            <li>
              <Link to="/receipts">Receipts</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </HeaderNavbar>
      </HeaderWrapper>
    </HeaderC>
  );
};

export default Header;
