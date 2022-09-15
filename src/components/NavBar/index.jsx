import React from 'react'
import CartWidget from '../CartWidget'
import './styles.css'
import { Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <Link className="navbar-brand" to= "/">Beaming</Link>
      <div>
        <ul>
          <li><Link to= "/">Inicio</Link></li>
          <li><Link to="/category/electronics">Electronics</Link></li>
          <li><Link to="/category/jewelery">Jewelery</Link></li>
          <li><Link to="/category/men's clothing">Men's clothing</Link></li>
          <li><Link to="/category/women's clothing">Women's clothing</Link></li>
        </ul>
      </div>
      <div>
        <CartWidget/>
      </div>
    </nav>
  )
}

export default NavBar