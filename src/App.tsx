import './App.css'
import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import CuriousLaw from './components/RandomLaw';
import { LawsGeneratorStore } from './context/LawsGeneratorContext';

const App: React.FC = () => {
  
  return (
    <div>
      <LawsGeneratorStore>
        <Header />
        <div className='flex justify-center'>
          <SideBar />
          <CuriousLaw></CuriousLaw>
        </div>
      </LawsGeneratorStore>
    </div>
  );
};

export default App;
