import React, {createContext, useContext} from 'react';
import {Chair} from '../types/types';
import chairsData from '../data/chairs';

type ChairsContextData = {
    chairs: Chair[];
};

const ChairsContext = createContext<ChairsContextData>({
    chairs: chairsData,
});

const ChairsProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return <ChairsContext.Provider value={{chairs: chairsData}}>{children}</ChairsContext.Provider>;
};

const useChairsContext = () => {
    const context = useContext(ChairsContext);
    if (!context) {
        throw new Error('useChairsContext must be used within a ChairsProvider');
    }
    return context;
};

export {ChairsProvider, useChairsContext};

