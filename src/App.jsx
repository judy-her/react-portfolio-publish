import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
