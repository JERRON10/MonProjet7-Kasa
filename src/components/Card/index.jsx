import styled from 'styled-components'
import { Fragment } from 'react'
import color from '../../utils/colors'
import { Link } from 'react-router-dom'
import logements from '../../data/logements.json'

const StyleCard = styled(Link)`
  background: linear-gradient(180deg, ${color.primary} 0%, black 220%);
  border-radius: 10px;
  width: 340px;
  height: 340px;
  margin: 35px;
  text-align: center;
  text-decoration: none;
  color: ${color.secondary};
  @media screen and (max-width: 520px) {
    margin: 15px auto 5px;
    width: 100%;
    height: 250px;
}
`
export default function Card() {
  return (
    <Fragment>
      {logements.map((data) => (
        <StyleCard to={`/renting/${data.id}`} key={data.id}>
          Titre de la location
        </StyleCard>
      ))}
    </Fragment>
  )
}
