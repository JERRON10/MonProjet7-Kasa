import React from 'react'
import data from '../../data/logements.json'
import styled from 'styled-components'

const StyledTitle = styled.h2`
  font-size: 36px;
  font-weight: 500;
  @media screen and (max-width: 520px) {
    font-size: 18px;
  }
`
export default function TitleLocation({ params }) {
  const findTitle = data.find((element) => element.id === params)
  const title = findTitle.title
  return (
    <div>
      <StyledTitle>{title}</StyledTitle>
    </div>
  )
}
