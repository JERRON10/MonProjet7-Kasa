import React from 'react'
import data from '../../data/logements.json'
import styled from 'styled-components'

const StyledSmallTitle = styled.h3`
  margin: 5px auto 20px;
`

export default function PlaceLocation({ params }) {
  const search = data.find((element) => element.id === params)
  const place = search.location
  return (
    <div>
      <StyledSmallTitle>{place}</StyledSmallTitle>
    </div>
  )
}