import React, { ReactNode, createContext, useState } from "react";
//import lawsData from '../Data/lawsData.json';
import lawsData from '../Data/data';


export type LawsGeneratorContextType = {
    generateRandomLaw: () => void;
    currentLaw: LawType;
    favoriteLaw: () => void;
    showFavoriteLaws: () => void;
    favoriteLaws: LawType[];
};

type LawsGeneratorStorePropsType = {
    children: ReactNode;
}

type LawType = {
    titulo: string;
    descricao: string;
    impacto: string;
    ano?: string;
    isFavorite?: boolean;
}

export const LawsGeneratorContext = createContext<LawsGeneratorContextType | undefined>(undefined);

export const LawsGeneratorStore: React.FC<LawsGeneratorStorePropsType> = ({ children }) => {
    //select a random law in the list 
    const generateRandomLaw = () => {
        const randomIndex = Math.floor(Math.random() * lawsData.lawsData.length);
        setCurrentLaw(lawsData.lawsData[randomIndex]);
      };
   
    const [currentLaw, setCurrentLaw] = useState<LawType>({} as LawType);
    const [favoriteLaws, setFavoriteLaws] = useState<LawType[]>([]);



    //favorite a law
    const favoriteLaw = () => {
        currentLaw.isFavorite = currentLaw.isFavorite ? false : true;
        return currentLaw.isFavorite;
    };

    //showFavoriteLaws
    const showFavoriteLaws = () => {
        var myFavoriteLaws: LawType[] = [];
        myFavoriteLaws = lawsData.lawsData.filter((law: LawType) => law.isFavorite === true);
        console.log(myFavoriteLaws);
        return setFavoriteLaws(myFavoriteLaws);
    }


    return (
        <LawsGeneratorContext.Provider value={{generateRandomLaw, favoriteLaw, showFavoriteLaws, currentLaw, favoriteLaws }} >{children}</LawsGeneratorContext.Provider>
    );

    

};