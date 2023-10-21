import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  const AboutMe = "I started coding when I was 12, and ever since I was a child, I've had a passion for learning how things work on computers. I assembled my first computer at the age of 14, and I've always helped my friends with their computers. My father was the one who planted the seed of curiosity about this topic in me. He didn't work in a related job, but he always supported me and taught me how to get started."

  return (
    <div className="App">
      <Navbar>
        <li>Inicio</li>
        <li>Acerca de</li>
        <li>Servicios</li>
        <li>Contacto</li>
      </Navbar>

      <article className='main'>
        <Header><h1>Demian<br />Calleros</h1></Header>
        <main className='cardContainer'>
          <Card title={'About me'}>{AboutMe}</Card>
          <Card title={'Skills'}>Skills</Card>
        </main>
      </article>
    </div>
  );
}

export default App;
