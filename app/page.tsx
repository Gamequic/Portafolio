import dynamic from 'next/dynamic';

import Border from './components/border';
import Ilustration from './components/Ilustration';
import Title from './components/Title';
const SubtitleClient = dynamic(() => import('./components/subtitle'), { ssr: false });

import './page.css';

export default function Home() {
  return (
    <div className="background flex flex-col min-h-screen p-8 gap-16 sm:p-16 font-[family-name:var(--font-geist-sans)]">
      <Border>
        <header>
          <div>
            <Title>Demian<br/>Calleros</Title>
            <SubtitleClient></SubtitleClient>
          </div>
          <div className='ilustration'>
            <Ilustration></Ilustration>
          </div>
        </header>
        <main>
          <h2>About me</h2>
          <h2>Skills</h2>
          <h2>Proyects</h2>
        </main>
      </Border>
    </div>
  );
}
