import React from 'react'
import './menu-item.css'
import DropList from '../drop-list/drop-list.js'

const MenuItem = (props) =>
    props.elements.map((item, i) =>
      <li key={i} className="nav-item px-5">
          <a className={`nav-link (${item.active} ? active-item : not-active-item)`}
            href={item.url}
            data-toggle={item.dropdown ? "dropdown" : ""}
          >
          {item.text}
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

             {(item.dropdown) ?  <DropList dropList={item.dropdown} /> : null }

            </div>
          </a>
      </li>
    )
export default MenuItem
