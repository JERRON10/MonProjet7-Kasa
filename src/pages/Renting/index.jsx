import React from 'react'
import { useParams } from 'react-router-dom'

function Renting() {
  const rentingNumber = useParams()
  console.log(rentingNumber)

  return <h2>Location 💟 {rentingNumber.id}</h2>
}

export default Renting
