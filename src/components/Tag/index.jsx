import React from 'react'
import data from '../../data/logements.json'
import styled from 'styled-components'
import colors from '../../utils/colors'

const StyledContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
  padding-left: 0;
`
const StyledTag = styled.li`
  background-color: ${colors.primary};
  color: white;
  font-size: 14px;
  padding: 5px 30px;
  border-radius: 6px;
  text-align: center;
  list-style: none;
  @media screen and (max-width: 520px) {
    font-size: 10px;
  }
`
export default function Tag({ params }) {
  const search = data.find((element) => element.id === params)
  const tag = search.tags
  return (
    <StyledContainer>
      {tag.map((element, index) => (
        <StyledTag key={index}>{element}</StyledTag>
      ))}
    </StyledContainer>
  )
}
