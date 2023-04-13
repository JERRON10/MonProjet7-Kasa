import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logo.png'

const HeaderLink = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 25px 50px;
`
const StyledLink = styled(Link)`
  margin-left: 40px;
  font-size: 24px;
  text-decoration: none;
`

export default function Header() {
  return (
    <HeaderLink>
      <img src={logo} alt="logo" width="200" />
      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A Propos</StyledLink>
      </nav>
    </HeaderLink>
  )
}
