import { useParams } from 'react-router-dom'
import Caroussel from '../../components/Caroussel'
import TitleLocation from '../../components/TitleLocation'
import PlaceLocation from '../../components/PlaceLocation'
import Tag from '../../components/Tag'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import data from '../../data/logements.json'
import styled from 'styled-components'
import Error from '../Error/index'

const StyledContainerCarrousel = styled.div`
  width: 90%;
  margin: auto;
`
const StyledContainerInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  margin: 30px auto;
  @media screen and (max-width: 520px) {
    flex-direction: column;
    margin: 10px auto;
  }
`
const StyledContainerTitlePLaceTag = styled.div`
  width: 55%;
  @media screen and (max-width: 520px) {
    width: 100%;
    flex-direction: row;
  }
`
const StyledContainerHostRating = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  @media screen and (max-width: 520px) {
    margin: 5px auto;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    flex-wrap: wrap;
  }
`
const StyledContainerCollapse = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto 120px;
  @media screen and (max-width: 520px) {
    margin: 0 auto 10px;
    width: 100%;
    align-items: center;
    flex-direction: column;
  }
`
const StyledCollapse = styled.div`
  width: 48%;
  @media screen and (max-width: 520px) {
    width: 90%;
  }
`

export default function Renting() {
  const rentingNumber = useParams()
  const findDescription = data.find(
    (element) => element.id === rentingNumber.id
  )
  const findEquipments = data.find((element) => element.id === rentingNumber.id)
  if (findDescription === undefined) return <Error />

  return (
    <div>
      <StyledContainerCarrousel>
        <Caroussel params={rentingNumber.id} />
      </StyledContainerCarrousel>

      <StyledContainerInfo>
        <StyledContainerTitlePLaceTag>
          <TitleLocation params={rentingNumber.id} />
          <PlaceLocation params={rentingNumber.id} />
          <Tag params={rentingNumber.id} />
        </StyledContainerTitlePLaceTag>
        <StyledContainerHostRating>
          <Host params={rentingNumber.id} />
          <Rating params={rentingNumber.id} />
        </StyledContainerHostRating>
      </StyledContainerInfo>

      <StyledContainerCollapse>
        <StyledCollapse>
          <Collapse title="Description" content={findDescription.description} />
        </StyledCollapse>
        <StyledCollapse>
          <Collapse
            title="Equipement"
            content={findEquipments.equipments.map((element, index) => (
              <p key={index}>{element}</p>
            ))}
          />
        </StyledCollapse>
      </StyledContainerCollapse>
    </div>
  )
}
