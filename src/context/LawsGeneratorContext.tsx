import React, { ReactNode, createContext, useState } from "react";
import lawsData from '../Data/lawsData.json';


export type LawsGeneratorContextType = {
    generateRandomLaw: () => void;
    currentLaw: LawType;
};

type LawsGeneratorStorePropsType = {
    children: ReactNode;
}

type LawType = {
    titulo: string;
    descricao: string;
    impacto: string;
    ano?: string;
}

export const LawsGeneratorContext = createContext<LawsGeneratorContextType | undefined>(undefined);

export const LawsGeneratorStore: React.FC<LawsGeneratorStorePropsType> = ({ children }) => {
    const generateRandomLaw = () => {
        const randomIndex = Math.floor(Math.random() * lawsData.lawsData.length);
        setCurrentLaw(lawsData.lawsData[randomIndex]);
      };
      const [currentLaw, setCurrentLaw] = useState<LawType>({} as LawType);
    return (
        <LawsGeneratorContext.Provider value={{generateRandomLaw, currentLaw}} >{children}</LawsGeneratorContext.Provider>
    );
};