import React from 'react'
import { useParams } from 'react-router-dom'
import Caroussel from '../../components/Caroussel'
import TitleLocation from '../../components/TitleLocation'
import Tag from '../../components/Tag'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import data from '../../data/logements.json'
import styled from 'styled-components'
import Error from '../Error/index'

const StyledContainerCollapse = styled.div`
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto 200px;
`

const StyledContainer = styled.div`
  background-color: lightgreen;
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 50px auto 30px;
`
const StyledCollapse = styled.div`
  background-color: orange;
  width: 48%;
`

function Renting() {
  const rentingNumber = useParams()

  const findDescription = data.find(
    (element) => element.id === rentingNumber.id
  )

  const findEquipments = data.find((element) => element.id === rentingNumber.id)

  console.log('meme id=>', findDescription === undefined)
  if (findDescription === undefined) return <Error />

  return (
    <div>
      <div>
        <Caroussel params={rentingNumber.id} />
      </div>
      <StyledContainer>
        <div>
          <TitleLocation params={rentingNumber.id} />
          <Tag params={rentingNumber.id} />
        </div>
        <div>
          <Host params={rentingNumber.id} />
          <Rating params={rentingNumber.id} />
        </div>
      </StyledContainer>
      <StyledContainerCollapse>
        <StyledCollapse>
          <Collapse title="Description" content={findDescription.description} />
        </StyledCollapse>
        <StyledCollapse>
          <Collapse
            title="Equipement"
            content={findEquipments.equipments.map((element, index) => (
              <p key={element + index}>{element}</p>
            ))}
          />
        </StyledCollapse>
      </StyledContainerCollapse>
    </div>
  )
}

export default Renting
