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
  font-size: 3vh;
  font-weight: 500;
  text-align: center;
  margin-top: 30px;
`
const StyledLink = styled(Link)`
  margin-top: 200px;
  font-size: 2vh;
  text-decoration: none;
  &:hover{
    text-decoration: underline solid 1px;
    text-decoration-skip-ink: none;
    text-underline-offset: 1px;  
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
