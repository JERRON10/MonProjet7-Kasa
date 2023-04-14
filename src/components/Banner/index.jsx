import styled from 'styled-components'
import imageHome from '../../assets/img-home.png'


const StyledBanner = styled.div`
  border: 0 black solid;
  border-radius: 10px;
  padding: 80px;
  margin: 50px 100px;
  text-align: center;
  background: url(${imageHome});
  background-position: center;
  position: relative;
  z-index:0;
  &::before {
    content:"";
    position: absolute;
    z-index: 1;
    top:0;
    left:0;
    background-color: black;
    width:100%;
    height:100%;
    opacity:0.3;
  }
`

function Banner({children}) {
  return (
    <StyledBanner>{children}</StyledBanner>
  )
}

export default Banner