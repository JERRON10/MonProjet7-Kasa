import React from 'react'
import data from '../../data/logements.json'
import styled from 'styled-components'
import colors from '../../utils/colors'

const StyledContainer = styled.ul`
background-color: blue;
display: flex;
flex-direction: row;
justify-content: flex-start;
padding: 0;

`
const StyledTag = styled.li`
background-color: ${colors.primary};
color: white;
padding: 5px 40px;
margin-right: 10px;
border-radius: 10px;
text-align: center;
list-style: none;

`

function Tag ({ params }) {
  const findTag = data.find((element) => element.id === params)
  const tag = findTag.tags
  return (
    <StyledContainer>
     {tag.map((element, index)=> <StyledTag key={index}>{element}</StyledTag> )}
    </StyledContainer>
  )
}

export default Tag