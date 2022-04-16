import { ButtonHTMLAttributes, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { AiFillEye } from 'react-icons/ai';
import { useUsers } from '../../contexts/userContext';
import { useSearch } from '../../contexts/searchContext';
import { Link } from 'react-router-dom';
import { VscArrowSmallUp, VscArrowSmallDown } from 'react-icons/vsc';

export function UsersTable(){
    const { users } = useUsers();
    const { searchUser } = useSearch();
    const [ tableUsers, setTableUsers ] = useState(users);
    const [ sort, setSort ] = useState("ASC");

    useEffect(() => {
        const filteredUsers = users.filter((user) => {

            if(
                user.name.first.toLocaleLowerCase()
                .includes(searchUser.toLocaleLowerCase()) 
                || user.name.last.toLocaleLowerCase()
                .includes(searchUser.toLocaleLowerCase())){

                return user
            }

        });
        setTableUsers(filteredUsers)
    }, [searchUser, users]);

    useEffect(() => {
        const sortedUsers = tableUsers.sort((user1, user2) => {
            return sort == 'ASC' ? 
            (user1.name.first.localeCompare(user2.name.first)) : 
            (user2.name.first.localeCompare(user1.name.first))
        });

        setTableUsers(sortedUsers);
    },[tableUsers, sort]);
    
    return(
        <table className={styles.tableContainer}>
            <thead>
                <tr>
                    <th>                        
                        <button 
                            onClick={() => {
                                sort == 'ASC' ? 
                                setSort('DESC') : 
                                setSort('ASC') 
                            }}
                        >
                            Name
                            { 
                            sort == 'ASC' ? 
                            <VscArrowSmallUp /> : 
                            <VscArrowSmallDown /> 
                            }
                        </button>
                    </th>
                    <th>Gender</th>
                    <th>Birth</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { tableUsers.map((user) => {

                    const date = new Date(user.dob.date);

                    return(
                        <tr key={ user.login.uuid }>
                            <td>{ user.name.first + " " + user.name.last }</td>
                            <td>{ user.gender }</td>
                            <td>{(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)}</td>
                            <td>
                                <Link to={`/view/${user.login.uuid}`}>
                                    <AiFillEye /> View
                                </Link>
                            </td>
                        </tr>
                    )
                }) }
            </tbody>
        </table>
    )
}