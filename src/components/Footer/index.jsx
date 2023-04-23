import React from 'react'
import styled from 'styled-components'
import logoWhite from '../../assets/logo-white.png'

const StyledBackground = styled.footer`
  background-color: black;
  text-align: center;
  padding: 20px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
const StyledCopyRight = styled.p`
  color: white;
  @media screen and (max-width: 520px) {
    font-size: 12px;
  }
`
export default function Footer() {
  return (
    <StyledBackground>
      <img src={logoWhite} alt="logo" width="100" />
      <StyledCopyRight>
        <i className="fa-regular fa-copyright" style={{ color: '#E3E3E3' }} />{' '}
        2020 Kasa. All rights reserved
      </StyledCopyRight>
    </StyledBackground>
  )
}
