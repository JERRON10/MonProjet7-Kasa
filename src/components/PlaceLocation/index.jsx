import React from 'react'
import data from '../../data/logements.json'
import styled from 'styled-components'

const StyledSmallTitle = styled.h3`
margin: 5px auto 20px;
`
export default function PlaceLocation({ params }) {
  const findPlace = data.find((element) => element.id === params)
  const place = findPlace.location
  return (
    <div>
      <StyledSmallTitle>{place}</StyledSmallTitle>
    </div>
  )
}


