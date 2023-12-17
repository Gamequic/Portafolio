import { useState, useEffect, useRef } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';
import LoadingBar from './components/LoadingBar';
import Footer from './components/Footer';
import ProyectCard from './components/ProyectCard';

function App() {
  const [ deviceScreen, setDeviceScreen ] = useState(window.innerWidth < 600 ? 'phone' : window.innerWidth < 1024 ? 'tablet' : 'desktop');
  const [ isHidden, setIsHidden ] = useState(deviceScreen === "desktop" ? false : true);

  useEffect(() => {
    const handleResize = async () => {
      setDeviceScreen(window.innerWidth < 600 ? 'phone' : window.innerWidth < 1024 ? 'tablet' : 'desktop')
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const mainRef = useRef(null);
  const aboutMeRef = useRef(null);
  const ProyectsRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToElement = (elementRef) => {
    const targetPosition = elementRef.current.offsetTop;

    mainRef.current.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  };  
  
  const AboutMe = "I started coding when I was 12, and ever since I was a child, I've had a passion for learning how things work on computers. I assembled my first computer at the age of 14, and I've always helped my friends with their computers. My father was the one who planted the seed of curiosity about this topic in me. He didn't work in a related job, but he always supported me and taught me how to get started."

  return (
    <div className="App">
      <Navbar
        deviceScreen={deviceScreen}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
      >
        <li onClick={() => {scrollToElement(aboutMeRef)}}>About me</li>
        <li onClick={() => {scrollToElement(ProyectsRef)}}>Proyects</li>
        <li onClick={() => {scrollToElement(footerRef)}}>Contact</li>
      </Navbar>

      <article ref={mainRef} className='main'>
        <Header
          deviceScreen={deviceScreen}
        >
          <h1 ref={aboutMeRef} >Demian<br />Calleros</h1><br/><p>Fullstack developer</p>
        </Header>
        <main className='cardContainer'>
          <h1 className='title'>About me</h1>
          <div style={{display: 'flex', flexDirection: 'row', flexWrap: deviceScreen==='phone'? 'wrap' : 'nowrap'}}>
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
          <h1 ref={ProyectsRef} className='title'>Proyects</h1>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: deviceScreen==='phone'? 'wrap' : 'nowrap'}} >
              <ProyectCard></ProyectCard>
              <ProyectCard></ProyectCard>
              <ProyectCard></ProyectCard>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: deviceScreen==='phone'? 'wrap' : 'nowrap'}} >
              <ProyectCard></ProyectCard>
              <ProyectCard></ProyectCard>
              <ProyectCard></ProyectCard>
            </div>
          </div>
        </main>
        <Footer targetElementRef={footerRef} />
      </article>
    </div>
  );
}

export default App;
