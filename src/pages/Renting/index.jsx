import React from 'react'
import { useParams } from 'react-router-dom'
import Caroussel from '../../components/Caroussel'

function Renting() {
  const rentingNumber = useParams()

  return (
    <div>
      <Caroussel params={rentingNumber.id} />
    </div>
  )
}

export default Renting
