"use client";

import { createContext, useContext } from "react";
import React, { useState } from "react";

interface GlobalContextState {
    category: string;
}

interface GlobalContextProps {
    children: React.ReactNode;
}

export const GlobalContext = createContext<
    | {
          category: string;
          setCategory: React.Dispatch<React.SetStateAction<string>>;
      }
    | undefined
>(undefined);

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error(
            "useGlobalContext must be used within a GlobalContextProvider"
        );
    }
    return context;
};

export const GlobalContextProvider: React.FC<GlobalContextProps> = ({
    children,
}) => {
    const [category, setCategory] = useState<string>("");

    return (
        <GlobalContext.Provider value={{ category, setCategory }}>
            {children}
        </GlobalContext.Provider>
    );
};
