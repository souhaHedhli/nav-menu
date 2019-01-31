import React from 'react'
import './drop-list.css'

const DropList = (props) =>
  props.dropList.map((elm, i) =>
      <div key={i}  href="test"> {elm.text} </div>
  )
export default DropList
