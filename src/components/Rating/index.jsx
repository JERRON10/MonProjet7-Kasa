import React from 'react'
import data from '../../data/logements.json'
import styled from 'styled-components'

const StyledStar = styled.span`
font-size: 22px;
margin-left: 18px;
background-color: brown;
`
const StyledContainer = styled.div`
background-color: black;
margin-top: 30px;

`

function Rating({ params }) {
  const findRating = data.find((element) => element.id === params)
  const rating = findRating.rating
  const star = <i className="fa-solid fa-star" />
  const greyStar = <i style={{ color: '#E3E3E3' }} className="fa-solid fa-star" />
  const range = [1, 2, 3, 4, 5]

  return (
    <StyledContainer>
      {range.map((element) =>
        rating < element ? (
          <StyledStar key={element.toString()}>
            {greyStar}
          </StyledStar>
        ) : (
          <StyledStar key = {element.toString()}>{star}</StyledStar>
        ) 
      )}
    </StyledContainer>
  )
}
export default Rating
