import React from 'react'
import data from '../../data/logements.json'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
  font-weight: 500;
  @media screen and (max-width: 520px) {
    width: 50%;
  }
`
const StyledImg = styled.img`
  border-radius: 50%;
  margin-left: 10px;
  width: 60px;
`
const StyledP = styled.p`
  font-size: 18px;
  font-weight: 500;
  width: 60%;
  text-align: right;
`

export default function Host({ params }) {
  const findHost = data.find((element) => element.id === params)
  const host = findHost.host
  return (
    <StyledContainer>
      <StyledP>{host.name}</StyledP>
      <StyledImg src={host.picture} alt="profil" width="100" />
    </StyledContainer>
  )
}