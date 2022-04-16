import { useState, createContext, useContext, useEffect, ReactNode } from 'react';

const userContext = createContext<UserContext>({
    users:[], 
    pagination: 1, 
    setPagination: () => {}
});

type UserContext = {
    users: User[],
    pagination: number,
    setPagination: (pagination: number) => void;
}

export type User = {
    login:{
        uuid: string
    }
    name:{
        first:string,
        last:string,
        title: string
    },
    gender: string,
    dob:{
        age: number,
        date:string
    },
    location:{
        street: {
            name: string,
            number: number
        },
        city: string,
        state: string,
        country: string,
        postcode:number
    }
    picture:{
        large: string,
        medium: string,
        thumbnail: string
    },
    cell: string,
    phone: string,
    email:string,
    nat: string
}

type UserProps = {
    children: ReactNode,
}

export default function UserProvider({ children }:UserProps) {

    const [ users, setUsers ] = useState<User[]>([]);
    const [ pagination, setPagination ] = useState(1);

    async function GetUsers(){
        const response = await fetch(`https://randomuser.me/api/?results=50&seed=abc&page=${pagination}`);
        const json = await response.json();

        return json.results;
    }

    useEffect(() => {
        GetUsers().then(response => { setUsers([...users, ...response]) });
    },[pagination]);
    
    return (
        <userContext.Provider value={{users, pagination, setPagination}}>
            { children }
        </userContext.Provider>
    )
}

export function useUsers(){
    const context = useContext(userContext);

    const { users, pagination, setPagination } = context;

    return { users, pagination, setPagination }
}
