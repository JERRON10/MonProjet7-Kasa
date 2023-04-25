import styled from 'styled-components'
import color from '../../utils/colors'
import Banner from '../../components/Banner/index'
import Card from '../../components/Card/index'
import imageHome from '../../assets/img-home.png'

const StyledBanner = styled.div`
  background: url(${imageHome});
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 0;
  border-radius: 20px;
  width: 90%;
  height: 225px;
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
  @media screen and (max-width: 520px) {
    margin: auto;
    height: 120px;
  }
`
const StyleBoxCards = styled.div`
  background-color: ${color.backgroundWindow};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: 20px;
  padding-top: 30px;
  margin: 30px auto;
  width: 90%;
  @media screen and (max-width: 520px) {
    background-color: white;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 10px auto;
  }
`
const StyleTitle = styled.h1`
  color: white;
  font-size: 45px;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 520px) {
    text-align: left;
    font-size: 25px;
    margin: 25px;
  }
`
export default function Home() {
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
