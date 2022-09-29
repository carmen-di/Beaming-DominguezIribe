import React from 'react'
import CartWidget from '../CartWidget'
import './styles.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
  
  return (
    <nav className='navbar'>
      <Link className="navbar-brand" to= "/">Beaming</Link>
      <div>
        <ul>
          <li><Link to= "/">Inicio</Link></li>
          <li><Link to="/category/aros">Aros</Link></li>
          <li><Link to="/category/collares">Collares</Link></li>
          <li><Link to="/category/anillos">Anillos</Link></li>
          <li><Link to="/category/pulseras">Pulseras</Link></li>
        </ul>
      </div>
      <div>
        <CartWidget/>
      </div>
    </nav>
  )
}

export default NavBar