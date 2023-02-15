import CartWidget from '../CartWidget';
import './styles.scss';

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="left">
        <div className="logo">
          <a href="/">
            <img src="https://via.placeholder.com/100x50" alt="Site logo" height="50" width="100" />
          </a>
        </div>

        <ul className="menu">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
      <div className="right">
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar;
