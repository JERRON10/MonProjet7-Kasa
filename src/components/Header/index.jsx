import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logo.png'

const HeaderLink = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 40px auto;
  width: 90%;
  @media screen and (max-width: 520px) {
    margin: 20px auto;
  }

  @media screen and (max-width: 360px) {
    flex-direction: column;
  }
`
const StyledLogo = styled.img`
  @media screen and (max-width: 520px) {
    width: 140px;
  }
  @media screen and (max-width: 360px) {
    margin-bottom: 20px;
  }
`
const StyledLink = styled(Link)`
  margin-left: 40px;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    text-decoration: underline solid 1px;
    text-underline-offset: 2px;
    text-decoration-skip-ink: none;
  }
  @media screen and (max-width: 520px) {
    margin-left: 20px;
    text-transform: uppercase;
  }
  @media screen and (max-width: 360px) {
    margin-right: 15px;
  }
`
export default function Header() {
  return (
    <HeaderLink>
      <StyledLogo src={logo} alt="logo" width="200" />
      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A Propos</StyledLink>
      </nav>
    </HeaderLink>
  )
}
