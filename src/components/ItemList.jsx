import React from 'react'
import { Link } from 'react-router-dom'

const ItemList = () => {
  return (
    <div>
        <ul>
            <Link to={"/items/1"}><li>Item 1</li></Link>
            <Link to={"/items/2"}><li>Item 2</li></Link>
            <Link to={"/items/3"}><li>Item 3</li></Link>
        </ul>
    </div>
  )
}

export default ItemList