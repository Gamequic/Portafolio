import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Navbar>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Contacto</a></li>
      </Navbar>
      {/* <Header></Header> */}
    </div>
  );
}

export default App;
