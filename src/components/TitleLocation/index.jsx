import React from 'react'
import data from '../../data/logements.json'
import styled from 'styled-components'

const StyledTitle = styled.h2`
background-color: yellow;
font-size: 36px;
margin-top: 10px;
`
const StyledSmallTitle = styled.h3`
background-color: pink;
margin: 10px auto;
`



function TitleLocation({ params }) {
  const findTitle = data.find((element) => element.id === params)
  const title = findTitle.title
  const location = findTitle.location
  return (
    <div>
      <StyledTitle>{title}</StyledTitle>
      <StyledSmallTitle>{location}</StyledSmallTitle>
    </div>
  )
}

export default TitleLocation
