import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import data from '../../data/logements.json'
import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'

const StyleCaroussel = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
`
const StyledImg = styled.img`
  position: relative;
  z-index: 1;
  object-fit: cover;
  border-radius: 25px;
  width: 100%;
  height: 400px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 520px) {
    height: 260px;
  }
`
const StyleArrowLeft = styled.img`
  position: absolute;
  z-index: 2;
  top: 42%;
  left: 25px;
  cursor: pointer;
  @media screen and (max-width: 520px) {
    width: 15px;
    height: 30px;
  }
`
const StyleArrowRight = styled.img`
  position: absolute;
  z-index: 2;
  top: 42%;
  right: 25px;
  cursor: pointer;
  @media screen and (max-width: 520px) {
    width: 15px;
    height: 30px;
  }
`
const StyleCounter = styled.p`
  position: absolute;
  z-index: 2;
  bottom: 20px;
  right: 48%;
  color: white;
  font-size: 20px;
  font-weight: 700;
  @media screen and (max-width: 520px) {
    display: none;
  }
`
export default function Caroussel({ params }) {
  const findImg = data.find((element) => element.id === params)
  const totalPicture = findImg.pictures.length
  const [index, setIndex] = useState(0)
  const previousImg = () => {
    const firstImg = index === 0
    const newIndex = firstImg ? totalPicture - 1 : index - 1
    setIndex(newIndex)
  }
  const nextImg = () => {
    const lastImg = index === totalPicture - 1
    const newIndex = lastImg ? 0 : index + 1
    setIndex(newIndex)
  }
  return totalPicture === 1 ? (
    <div>
      <StyleCaroussel>
        <StyledImg src={findImg.pictures[index]} />
      </StyleCaroussel>
    </div>
  ) : (
    <div>
      <StyleCaroussel>
        <StyledImg src={findImg.pictures[index]} />
        <StyleArrowLeft
          onClick={previousImg}
          src={arrowLeft}
          alt="flèche gauche"
        />
        <StyleArrowRight
          onClick={nextImg}
          src={arrowRight}
          alt="flèche droite"
        />
        <StyleCounter>
          {index + 1} / {totalPicture}
        </StyleCounter>
      </StyleCaroussel>
    </div>
  )
}
