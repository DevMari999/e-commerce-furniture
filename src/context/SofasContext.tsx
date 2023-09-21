import React, {createContext, useContext} from 'react';
import {Sofa} from '../types/types';
import sofasData from '../data/sofas';

type SofasContextData = {
    sofas: Sofa[];
};

const SofasContext = createContext<SofasContextData>({
    sofas: sofasData,
});

const SofasProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return <SofasContext.Provider value={{sofas: sofasData}}>{children}</SofasContext.Provider>;
};

const useSofasContext = () => {
    const context = useContext(SofasContext);
    if (!context) {
        throw new Error('useSofasContext must be used within a SofasProvider');
    }
    return context;
};

export {SofasProvider, useSofasContext};
