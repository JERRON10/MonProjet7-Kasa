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
`
const StyledLink = styled(Link)`
  margin-left: 40px;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    text-decoration: underline solid 1px;
    text-underline-offset: 2px;
    text-decoration-skip-ink: none;
  }
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
