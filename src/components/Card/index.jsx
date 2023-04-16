import styled from 'styled-components'
import color from '../../utils/colors'
import {Link} from 'react-router-dom'
import logements from '../../data/logements.json'
import { Fragment } from 'react'

const StyleCard = styled(Link)`
  background: linear-gradient(180deg, ${color.primary} 0%, black 220%);
  border-radius: 10px;
  width: 300px;
  height: 300px;
  margin: 40px;
  text-align: center;
  text-decoration: none;
  color : ${color.secondary}
`
function Card (){

    return (    
        <Fragment>
        {logements.map((data) => (
            <StyleCard to={`/renting/${data.id}`} key={data.id}>Titre de la location</StyleCard>
          ))}
        </Fragment> 
    )
}

export default Card