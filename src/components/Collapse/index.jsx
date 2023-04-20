import styled from 'styled-components'
import { useState } from 'react'
import arrowUp from '../../assets/vector-up.png'
import arrowDown from '../../assets/vector-down.png'
import color from '../../utils/colors'

const StyleCollapse = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  position: relative;
  margin-bottom: 15px;
`

const StyleCollapseBar = styled.div`
  background-color: ${color.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  position: relative;
  z-index: 1;
`

const StyleCollapseContent = styled.div`
  background-color: #f6f6f6;
  width: 100%;
  border-radius: 10px;
  position: relative;
  top: -10px;
  z_index: 0;
`
const StyleCollapseP = styled.ul`
  padding: 30px;
  font-size: 24px;
  text-align: left;
`
const StyleCollapseH3 = styled.h3`
  color: white;
  padding-left: 30px;
  font-size: 24px;
  font-weight: 5;
`
const StyleCollapseArrow = styled.img`
  padding-right: 40px;
`

function Collapse({ title, content }) {
  const [arrow, setArrow] = useState(arrowUp)
  const [open, setOpen] = useState(false)

  return open ? (
    <StyleCollapse>
      <StyleCollapseBar
        onClick={() => {
          setArrow(arrow === arrowDown ? arrowUp : arrowDown)
          setOpen(false)
        }}
      >
        <StyleCollapseH3>{title}</StyleCollapseH3>
        <StyleCollapseArrow src={arrow} alt="flèche" width="24" height="14" />
      </StyleCollapseBar>
      <StyleCollapseContent>
        <br />
        <StyleCollapseP>{content}</StyleCollapseP>
        <br/>
      </StyleCollapseContent>
    </StyleCollapse>
  ) : (
    <StyleCollapse>
      <StyleCollapseBar
        onClick={() => {
          setArrow(arrow === arrowDown ? arrowUp : arrowDown)
          setOpen(true)
        }}
      >
        <StyleCollapseH3>{title}</StyleCollapseH3>
        <StyleCollapseArrow src={arrow} alt="flèche" width="24" height="14" />
      </StyleCollapseBar>
    </StyleCollapse>
  )
}

export default Collapse
