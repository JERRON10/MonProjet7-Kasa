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
  transition: transform 300ms cubic-bezier(0,.4,.45,1.92);
  opacity: 0.90;
  &:hover {
    opacity: 1;
    transform: scale(1.03);
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
`
const StyledTitle = styled.h2`
  text-decoration: none;
  text-align: center;
  margin-top: 10px;
  color: ${colors.secondary};
  @media screen and (max-width: 520px) {
    font-size: 15px;
  }
`

export default function Card() {
  return (
    <Fragment>
      {/* Je recupére les données (id, cover, title) en utilisant la fonction map sur les logements. */}
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
