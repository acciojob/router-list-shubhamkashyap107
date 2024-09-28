import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDetail = () => {
    const{id} = useParams()
  return (
    <div>
        Desciption for Item {id}
    </div>
  )
}

export default ItemDetail