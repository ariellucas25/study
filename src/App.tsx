import './App.css'
import React from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { LawsGeneratorStore } from './context/LawsGeneratorContext';
import { ApolloProvider } from '@apollo/client';
import { client } from './Data/ServiceData';
import RandomLaw from './components/RandomLaw';
import FavoriteLaws from './components/FavoriteLaws';

const App: React.FC = () => {
  
  return (
    <div>
      <ApolloProvider client={client}>
          <LawsGeneratorStore>
            <Header />
              <div className='flex justify-center'>
                <SideBar />
                <div className='flex flex-col'>
                  <RandomLaw></RandomLaw>
                  <FavoriteLaws />
                </div>
                
              </div>
            </LawsGeneratorStore>
          </ApolloProvider>
        
        
      
    </div>
  );
};

export default App;
