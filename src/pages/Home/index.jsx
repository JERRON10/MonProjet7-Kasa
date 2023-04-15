import styled from 'styled-components'
import color from '../../utils/colors'
import Banner from '../../components/Banner/index'
import Card from '../../components/Card/index'
import imageHome from '../../assets/img-home.png'

const StyleBoxCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: ${color.backgroundWindow};
  border-radius: 20px;
  margin: 30px auto;
  width: 90%;
`

const StyleTitle = styled.h1`
  color: white;
  font-size: 50px;
  position: relative;
  z-index: 2;

`

const StyledBanner = styled.div`
  background: url(${imageHome});
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 0;
  border: 0 black solid;
  border-radius: 20px;
  width: 90%;
  height:250px;
  margin: 50px auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: '';
    background-color: black;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    opacity: 0.3;
  }
`

function Home() {
  return (
    <div>
      <Banner>
        <StyledBanner>
          <StyleTitle> Chez vous, partout et ailleurs</StyleTitle>
        </StyledBanner>
      </Banner>
      <StyleBoxCards>
        <Card />
      </StyleBoxCards>
    </div>
  )
}

export default Home
