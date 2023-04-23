import styled from 'styled-components'
import { Fragment } from 'react'
import colors from '../../utils/colors'
import { Link } from 'react-router-dom'
import logements from '../../data/logements.json'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.secondary};
`
const StyledCard = styled.article`
  background-color: ${colors.primary};
  border-radius: 10px;
  width: 340px;
  height: 340px;
  margin: 30px;
  text-align: center;
  position: relative;
  z-index: 0;
  &:hover {
    box-shadow: 0 0 15px grey;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background-color: white;
    border-radius: 10px;
    width: 100%;
    height: 75%;
  }
  @media screen and (max-width: 520px) {
    margin: 10px auto 5px;
    height: 250px;
  }
`
const StyledImg = styled.img`
  width: 100%;
  height: 75%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`
const StyledTitle = styled.h2`
  text-decoration: none;
  text-align: center;
  margin-top: 10px;
  color: ${colors.secondary};
  @media screen and (max-width: 520px) {
    font-size: 14px;
  }
`

export default function Card() {
  return (
    <Fragment>
      {logements.map((element) => (
        <StyledLink to={`/renting/${element.id}`} key={element.id}>
          <StyledCard>
            <StyledImg src={element.cover} alt="logement" />
            <StyledTitle>{element.title}</StyledTitle>
          </StyledCard>
        </StyledLink>
      ))}
    </Fragment>
  )
}
