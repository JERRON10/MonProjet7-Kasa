import React from 'react'
import data from '../../data/logements.json'
import styled from 'styled-components'

const StyledImg = styled.img`
  border-radius: 50%;
  margin-left: 10px;
  width: 60px;

`

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 500;
  background-color: green;

`

const StyledP = styled.p`
background-color: purple;
font-size: 18px;
width: 100px;
text-align: right;
`

function Host({ params }) {
  const findHost = data.find((element) => element.id === params)
  const host = findHost.host
  return (
    <StyledContainer>
      <StyledP>{host.name}</StyledP>
      <StyledImg src={host.picture} alt="profil" width="100" />
    </StyledContainer>
  )
}

export default Host
