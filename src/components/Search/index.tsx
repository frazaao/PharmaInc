import styles from './styles.module.css';
import { RiUserSearchFill } from 'react-icons/ri'
import { useSearch } from '../../contexts/searchContext';

export function Search(){

    const { searchUser, setSearchUser } = useSearch();

    console.log(searchUser);

    return (
        <div className={styles.searchContainer}>
            <input 
                value={searchUser} 
                onChange={({target}) => {setSearchUser(target.value)}}
                type="text" 
                name="search" 
                id="search-input" 
                placeholder="Search users"
            />
            <RiUserSearchFill />
        </div>
    )
}