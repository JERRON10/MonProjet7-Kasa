import styled from 'styled-components'
import { useState } from 'react'
import arrowUp from '../../assets/vector-up.png'
import arrowDown from '../../assets/vector-down.png'
import color from '../../utils/colors'

const StyledCollapse = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  position: relative;
  margin-bottom: 15px;
`
const StyledCollapseBar = styled.div`
  background-color: ${color.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 520px) {
    height: 35px;
  }
`
const StyledCollapseTitle = styled.h3`
  color: white;
  padding-left: 15px;
  font-size: 24px;
  @media screen and (max-width: 520px) {
    font-size: 15px;
  }
`
const StyledCollapseArrow = styled.img`
  padding-right: 10px;
`
const StyledCollapseContent = styled.div`
  background-color: #f6f6f6;
  width: 100%;
  border-radius: 10px;
  position: relative;
  top: -10px;
  z_index: 0;
`
const StyledCollapseText = styled.div`
  padding: 30px;
  text-align: left;
`
// Je récupére les props title et content pour compléter les collapses.
export default function Collapse({ title, content }) {
  const [arrow, setArrow] = useState(arrowUp)
  const [open, setOpen] = useState(false)

  // Si open est false afficher uniquement la barre sinon barre + contenu.
  return open ? (
    <StyledCollapse>
      <StyledCollapseBar
        onClick={() => {
          // Au click sur la collapse, je change le sens de la flèche et la collapse est en position par défaut (fermé)
          setArrow(arrow === arrowDown ? arrowUp : arrowDown)
          setOpen(false)
        }}
      >
        <StyledCollapseTitle>{title}</StyledCollapseTitle>
        <StyledCollapseArrow src={arrow} alt="flèche" width="24" height="14" />
      </StyledCollapseBar>
      <StyledCollapseContent>
        <StyledCollapseText>{content}</StyledCollapseText>
        <br />
      </StyledCollapseContent>
    </StyledCollapse>
  ) : (
    <StyledCollapse>
      <StyledCollapseBar
        // Au click sur la collapse, je change le sens de la flèche et la collapse est ouverte
        onClick={() => {
          setArrow(arrow === arrowDown ? arrowUp : arrowDown)
          setOpen(true)
        }}
      >
        <StyledCollapseTitle>{title}</StyledCollapseTitle>
        <StyledCollapseArrow src={arrow} alt="flèche" width="24" height="14" />
      </StyledCollapseBar>
    </StyledCollapse>
  )
}
