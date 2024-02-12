import './App.css'
import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import CuriousLaw from './components/RandomLaw';

const App: React.FC = () => {
  

  return (
    <div>
      <Header />
      <div className='flex justify-center'>
      <SideBar />
      <CuriousLaw></CuriousLaw>
      </div>
    </div>
  );
};

export default App;
