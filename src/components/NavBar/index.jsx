import React from 'react'
import './styles.css'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <a className="navbar-brand" href="/#">Beaming</a>
      <div>
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Productos</a></li>
          <li><a href="/#">Contacto</a></li>
          <li><a href="/#">Cuidados</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar