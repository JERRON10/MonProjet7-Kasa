import styled from 'styled-components'
import color from '../../utils/colors'
import logements from '../../data/logements.json'
import {Link} from 'react-router-dom'

const StyledBanner = styled.div`
  border: 0 black solid;
  border-radius: 10px;
  padding: 60px;
  margin: 0 40px;
  text-align: center;
  color: black;
  background-color: lightblue;
  font-size: 40px;
`
const StyleBoxCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${color.backgroundWindow};
  border-radius: 20px;
  margin: 30px 40px;
`
const StyleCard = styled(Link)`
  background: linear-gradient(180deg, ${color.primary} 0%, black 220%);
  border-radius: 10px;
  width: 350px;
  height: 350px;
  margin: 55px;
  text-align: center;
  text-decoration: none;
  color : ${color.secondary}
`

function Home() {



  return (
    <div>
      <StyledBanner>Chez vous, partout et ailleurs</StyledBanner>
      <StyleBoxCards>
        {logements.map((data) => (
          <StyleCard to={data.id} key={data.id}>{data.id} Titre de la location</StyleCard>
        ))}
        
      </StyleBoxCards>
    </div>
  )
}

export default Home
