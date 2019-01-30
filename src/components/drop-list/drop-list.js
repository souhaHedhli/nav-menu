import React from 'react'
import './drop-list.css'

const DropList = (props) =>
  props.dropList.map((elm, i) =>
      <a key={i} className="dropdown-item" href="test"> {elm} </a>
  )
export default DropList
