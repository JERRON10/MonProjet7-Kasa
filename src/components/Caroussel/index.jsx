import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import data from '../../data/logements.json'
import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'

const StyledCaroussel = styled.div`
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
const StyledArrowLeft = styled.img`
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
const StyledArrowRight = styled.img`
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
const StyledCounter = styled.p`
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

// Je récupére la props params qui représente l'id de Url (donc id du logement)
export default function Caroussel({ params }) {
  // J'utilise la méthode find pour récupérer l'id du bon logement.
  const search = data.find((element) => element.id === params)

  // j'utilise lenght pour avoir le total des images disponibles.
  const totalPictures = search.pictures.length

  // Index est la valeur actuelle. SetIndex est la fonction qui permet de la modifier et useState est la valeur initiale (ici 0)
  const [index, setIndex] = useState(0)

  // la fonction permet de changer d'image en fonction de son index. 
  // Si l'index est de 0 retourner au dernier index sinon retourné à l'index précédent.
  const previousImg = () => {
    const firstImg = index === 0
    const newIndex = firstImg ? totalPictures - 1 : index - 1
    setIndex(newIndex)
  }

    // Si c'est le dernier index retourner au premier index sinon retourner à l'index suivant.
  const nextImg = () => {
    const lastImg = index === totalPictures - 1
    const newIndex = lastImg ? 0 : index + 1
    setIndex(newIndex)
  }

  // Si il y a une image dans data ne pas retourner le compteur
  return totalPictures === 1 ? (
    <div>
      <StyledCaroussel>
        <StyledImg src={search.pictures[index]} />
      </StyledCaroussel>
    </div>
    // sinon il retourne le compteur
  ) : (
    <div>
      <StyledCaroussel>
        <StyledImg src={search.pictures[index]} />
        <StyledArrowLeft
        // Onclick permet d'appeler la fonction previousImg
          onClick={previousImg}
          src={arrowLeft}
          alt="flèche gauche"
        />
        <StyledArrowRight
          onClick={nextImg}
          src={arrowRight}
          alt="flèche droite"
        />
        <StyledCounter>
          {index + 1} / {totalPictures}
        </StyledCounter>
      </StyledCaroussel>
    </div>
  )
}
