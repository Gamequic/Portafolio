import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';
import LoadingBar from './components/LoadingBar';
import Footer from './components/Footer';

function App() {
  const AboutMe = "I started coding when I was 12, and ever since I was a child, I've had a passion for learning how things work on computers. I assembled my first computer at the age of 14, and I've always helped my friends with their computers. My father was the one who planted the seed of curiosity about this topic in me. He didn't work in a related job, but he always supported me and taught me how to get started."

  return (
    <div className="App">
      <Navbar>
        <li>About me</li>
        <li>Proyects</li>
        <li>Contact</li>
      </Navbar>

      <article className='main'>
        <Header><h1>Demian<br />Calleros</h1></Header>
        <main className='cardContainer'>
          <h1 className='title'>About me</h1>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <Card title={'About me'}>{AboutMe}</Card>
            <Card title={'Skills'}>
              <LoadingBar
                width={'70%'}
                color={'#2965f1ff'}
                fontColor={'black'}
                logo={process.env.PUBLIC_URL + '/Logos/CSS.svg'}
              ></LoadingBar>
              <LoadingBar
                width={'85%'}
                color={'#ef652aff'}
                fontColor={'black'}
                logo={process.env.PUBLIC_URL + '/Logos/HTML.svg'}
              ></LoadingBar>
              <LoadingBar
                width={'85%'}
                color={'#ffde25'}
                fontColor={'black'}
                logo={process.env.PUBLIC_URL + '/Logos/JS.svg'}
              ></LoadingBar>
              <LoadingBar
                width={'90%'}
                color={'#539e43'}
                fontColor={'black'}
                logo={process.env.PUBLIC_URL + '/Logos/Node.png'}
              ></LoadingBar>
              <LoadingBar
                width={'70%'}
                color={'#61dafbff'}
                fontColor={'black'}
                logo={process.env.PUBLIC_URL + '/Logos/React.svg'}
              ></LoadingBar>
            </Card>
          </div>
          <h1 className='title'>Proyects</h1>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <Card title={'About me'}>{AboutMe}</Card>
          </div>
        </main>
        <Footer />
      </article>
    </div>
  );
}

export default App;
