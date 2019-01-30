import React from 'react'
import './nav-menu.css'
import DropList from '../drop-list/droplist.js'


const items = [{
                url:'#',
                name: 'Home',
                active: true,
                dropdown: false
              },
              {
                url:'#',
                name: 'Services',
                active: false,
                dropdown: true
              },
              {
                url:'#',
                name: 'Contact',
                active: false,
                dropdown: false
              }
              ]

const Menu = (props) => {
  const {url,name,active,dropdown} = this.props
  return  (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className={`${active}? active-item : not-active-item`}>
                    <a href={url} alt={name}>
                      {name}
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                       ( ${dropdown} ?  <DropList /> : null )

                      </div>
                    </a>
                  </li>
                </ul>
            </div>
        </nav>
    )
}
export default Menu
