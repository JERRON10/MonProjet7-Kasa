import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
  width: 90%;
`
const Styled404 = styled.h2`
  font-size: 22vw;
  font-weight: 700;
`
const StyledP = styled.p`
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
  font-size: 35px;
  @media screen and (max-width: 520px) {
    font-size: 18px;
    margin: 10px 30px 0;
  }
`
const StyledLink = styled(Link)`
  margin-top: 160px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    text-decoration: underline solid 1px;
    text-decoration-skip-ink: none;
    text-underline-offset: 1px;
  }
  @media screen and (max-width: 520px) {
    font-size: 12px;
    margin-top: 100px;
  }

`
export default function Error() {
  return (
    <StyledContainer>
      <Styled404>404</Styled404>
      <StyledP>Oups! La page que vous demandez n'existe pas.</StyledP>
      <StyledLink to="/">Retourner sur la page d'acceuil</StyledLink>
    </StyledContainer>
  )
}
