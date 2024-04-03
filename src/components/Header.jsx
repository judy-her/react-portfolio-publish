import '../index.css';
import '../styles/Header.css';

import Navbar from './Navbar';

function Header() {
  return (
    <header className="header gradient-background">
      <h1 className="logo">Judith |</h1>
      <nav className="navbar">
        <Navbar />
      </nav>
    </header>
  );
}

export default Header;
