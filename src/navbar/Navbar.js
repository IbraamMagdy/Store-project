import React from 'react'
import { Link, useLocation  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import './NavbarStyle.css';


const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '';

  return (
    <div>
      <nav className={`navbar navbar-expand-lg  ${isHomePage ? 'navbarHomeColor' : 'bg-body-tertiary'}`}>
        <div className="container-fluid">
            <Link className="nav-link active" aria-current="page" to="/">
                <img src={require('../image/logo.png')} alt="logo" />
                <p className='brandName'>Furniture Haven</p>
            </Link>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item space">
                        <Link className="nav-link active" aria-current="page" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item space">
                        <Link className="nav-link" to="/shop">
                            Shop
                        </Link>
                    </li>
                    <li className="nav-item space">
                        <Link className="nav-link" to="/blog">
                            Blog
                        </Link>     
                    </li>
                    <li className="nav-item space">
                        <Link className="nav-link" to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="d-flex align-items-center">
                <Link to="/login" className="nav-link space">
                    <FontAwesomeIcon icon={faUser} />
                </Link>
                <Link to="" className="nav-link space">
                    <FontAwesomeIcon icon={faSearch} />
                </Link>
                <Link to="/favorites" className="nav-link space">
                    <FontAwesomeIcon icon={faHeart} />
                </Link>
                <Link to="/cart" className="nav-link space">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
                </div>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
