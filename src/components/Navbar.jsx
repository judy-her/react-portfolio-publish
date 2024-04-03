import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const activePage = useLocation().pathname;
  return (
    <nav className="navbar header gradient-background navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="logo text-gradient" href="#">
          Judith
        </a>

        <ul className="navbar">
          <li className="nav-item ">
            <Link
              to="/"
              className={activePage === '/' ? 'nav-link active' : 'nav-link'}
            >
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/portfolio"
              className={
                activePage === '/portfolio' ? 'nav-link active' : 'nav-link'
              }
            >
              Portfolio
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/contact"
              className={
                activePage === '/contact' ? 'nav-link active' : 'nav-link'
              }
            >
              Contact
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/resume"
              className={
                activePage === '/resume' ? 'nav-link active' : 'nav-link'
              }
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </nav>
  );
}

export default Navbar;
