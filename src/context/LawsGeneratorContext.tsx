import React, { ReactNode, createContext, useState } from "react";
import LawType from "../models/LawModel";
import { useQuery } from "@apollo/client";
import { GET_LAWS } from "../Data/ServiceData";


export type LawsGeneratorContextType = {
    generateRandomLaw: () => void;
    currentLaw: LawType;
    setCurrentLaw: React.Dispatch<React.SetStateAction<LawType>>;
};

type LawsGeneratorStorePropsType = {
    children: ReactNode;
}

type responseType = {
    getLaws: LawType[];
}


export const LawsGeneratorContext = createContext<LawsGeneratorContextType | undefined>(undefined);

export const LawsGeneratorStore: React.FC<LawsGeneratorStorePropsType> = ({ children }) => {

    const { loading, error, data } = useQuery<responseType>(GET_LAWS);

    const [currentLaw, setCurrentLaw] = useState<LawType>({} as LawType);

    const generateRandomLaw = () => {
        if (!loading && data && data.getLaws) {
            const nonFavoriteLaws = data.getLaws.filter(law => !law.isFavorite);
            const randomIndex = Math.floor(Math.random() * nonFavoriteLaws.length);
            setCurrentLaw(nonFavoriteLaws[randomIndex]);
        }
    };

    if (loading) return <p>Carregando...</p>;

    // Se houver um erro, você pode tratar o erro aqui
    if (error) return <p>Ocorreu um erro ao carregar os dados...</p>;

     

    return (
        <LawsGeneratorContext.Provider 
            value={{ generateRandomLaw, currentLaw, setCurrentLaw }} >
                {children}
        </LawsGeneratorContext.Provider>
    );

    

};