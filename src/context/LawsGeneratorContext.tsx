import React, { ReactNode, createContext, useState } from "react";
//import lawsData from '../Data/lawsData.json';
import LawType from "../models/LawModel";
import { useQuery, gql } from "@apollo/client";
import { GET_LAWS } from "../Data/ServiceData";


export type LawsGeneratorContextType = {
    generateRandomLaw: () => void;
    currentLaw: LawType;
};

type LawsGeneratorStorePropsType = {
    children: ReactNode;
}

type responseType = {
    laws: LawType[];
  }

export const LawsGeneratorContext = createContext<LawsGeneratorContextType | undefined>(undefined);

export const LawsGeneratorStore: React.FC<LawsGeneratorStorePropsType> = ({ children }) => {

    
    //select a random law in the list 
    const { loading, error, data } = useQuery<responseType>(GET_LAWS);

    const [currentLaw, setCurrentLaw] = useState<LawType>({} as LawType);

    const generateRandomLaw = () => {
        if (data && data.laws) {
            const randomIndex = Math.floor(Math.random() * data.laws.length);
            setCurrentLaw(data.laws[randomIndex]);
        }
    };


    return (
        <LawsGeneratorContext.Provider value={{ generateRandomLaw, currentLaw }} >{children}</LawsGeneratorContext.Provider>
    );

    

};