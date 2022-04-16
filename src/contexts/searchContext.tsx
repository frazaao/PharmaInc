import { useState, createContext, useContext, ReactNode } from 'react';

const searchContext = createContext<SearchContext>
    ({ 
        searchUser:"", 
        setSearchUser:()=>{},
    });

type SearchContext = {
    searchUser: string,
    setSearchUser: (searchUser: string) => void,
}

type SearchProps = {
    children: ReactNode
}

export default function SearchProvider({ children }:SearchProps){

    const [ searchUser, setSearchUser ] =useState("");

    return(
        <searchContext.Provider value={{ searchUser, setSearchUser }}>
            { children }
        </searchContext.Provider>
    )
}

export function useSearch(){
    const context = useContext(searchContext);

    const { searchUser, setSearchUser } = context;

    return { searchUser, setSearchUser }
}