import React from 'react'
import data from '../../data/logements.json'
import styled from 'styled-components'

const StyledStar = styled.span`
font-size: 25px;
margin-left: 10px;
@media screen and (max-width: 520px) {
  margin-left:0;
  margin-right: 6px;
}
`
const StyledContainer = styled.div`

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
