import React from "react";
import { Link } from "react-router-dom";
import { LogoC } from "./styles";

interface ILogoProps {
  fontSize?: number,
}

const Logo:React.FC<ILogoProps> = ({fontSize}) => {
  return (
    <LogoC fontSize={fontSize}>
      <Link to="/">Cook sweet</Link>
    </LogoC>
  );
};

export default Logo;
