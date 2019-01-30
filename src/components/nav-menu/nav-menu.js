import React from 'react'
import './nav-menu.css'
import MenuItem from '../menu-item/menu-item.js'

const items = [{
               id: 'home',
               url:'#',
               text: 'Home',
               active: false
             },
             {
               id: 'services',
               url:'#',
               text: 'Services',
               active: true,
               dropdown: [{
                 id: 'for-entrepreneurs',
                 url:'#',
                 text: 'For entrepreneurs',
               }, {
                 id: 'for-students',
                 url:'#',
                 text: 'For students',
               }, {
                 id: 'for-hobbyists',
                 url:'#',
                 text: 'For hobbyists',
               }]
             },
             {
               id: 'contact',
               url:'#',
               text: 'Contact',
               active: false
             }
             ]

const Menu = () => {
  return  (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <MenuItem elements={items}/>
                </ul>
            </div>
        </nav>
    )
}
export default Menu
