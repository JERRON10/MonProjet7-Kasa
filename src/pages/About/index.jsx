import Banner from '../../components/Banner/index'
import imageAbout from '../../assets/img-about.png'
import styled from 'styled-components'
import Collapse from '../../components/Collapse/index'

const StyledBanner = styled.div`
  background: url(${imageAbout});
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 0;
  border-radius: 20px;
  width: 90%;
  height: 225px;
  margin: 25px auto;
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
const StyledContainerCollapse = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75%;
  margin: 20px auto 50px;
  @media screen and (max-width: 520px) {
    width: 90%;
  }
`
export default function About() {
  const info = [
    {
      title: 'Fiabilité',
      content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    },
    {
      title: 'Respect',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: 'Sécurité',
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ]

  return (
    <div>
      <Banner>
        <StyledBanner />
      </Banner>
      <StyledContainerCollapse>
        {info.map((element, index) => (
          <Collapse
            key={element + index}
            title={element.title}
            content={element.content}
          />
        ))}
      </StyledContainerCollapse>
    </div>
  )
}
