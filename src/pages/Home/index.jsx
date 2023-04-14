import styled from 'styled-components'
import color from '../../utils/colors'
import Banner from '../../components/Banner/index'
import Card from '../../components/Card/index'


const StyleBoxCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${color.backgroundWindow};
  border-radius: 20px;
  margin: 30px 100px;
`

const StyleTitle = styled.h1`
color: white;
font-size: 50px;
position: relative;
z-index:2;
font-weight: 4;

`

function Home() {

  return (
    <div>
      <Banner>
        <StyleTitle> Chez vous, partout et ailleurs</StyleTitle>
      </Banner>
      <StyleBoxCards>
        <Card/>
      </StyleBoxCards>
    </div>
  )
}

export default Home
