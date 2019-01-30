import React from 'react'
import './nav-menu.css'

const Menu = (props) => {
  const {id,url,text,active,dropdown} = props
  return  (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className={`${active}? active-item : not-active-item`}>
                    <a href={url} alt={text}>
                      {text}
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                       ( {dropdown} ?  {dropdown.map((elm)=>elm.text)} : null )

                      </div>
                    </a>
                  </li>
                </ul>
            </div>
        </nav>
    )
}
export default Menu
