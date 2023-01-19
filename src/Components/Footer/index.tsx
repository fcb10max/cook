import React from 'react'
import Logo from '../Logo'
import { FooterC, FooterWrapper } from './styles'

const Footer = () => {
  return (
    <FooterC>
      <FooterWrapper>
        <Logo/>
      </FooterWrapper>
      <small>&copy;2023. Все права защищены</small>
    </FooterC>
  )
}

export default Footer