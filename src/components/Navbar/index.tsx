import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as MenuHamburguer } from 'assets/images/menu-hamburguer.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-warning main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>Carros Top</h4>
        </Link>
        <nav className="navbar navbar-custom ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#carrostop-navbar"
          aria-controls="carrostop-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar ">
            <MenuHamburguer />
          </span>
        </button>
        </nav>
        <div className="collapse navbar-collapse" id="carrostop-navbar">
          <ul className="navbar-nav offset-md-8 main-menu">
            <li className="menu-nav">
              <NavLink to="/" activeClassName="active" exact>
                Home
              </NavLink>
            </li>
            <li className="menu-nav-title">
              <NavLink to="products" activeClassName="active">
                {' '}
                Catálogo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
