import { useEffect, useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { useUsers } from "../../contexts/userContext";
import styles from './styles.module.css';


export function LoadMore(){
    const [ isClicked, setIsClicked ] = useState(false);
    const { pagination, setPagination } = useUsers();

    useEffect(() => {
        isClicked && (
            setTimeout(() => {
                setIsClicked(false)
            }, 2000)
        )
    }, [isClicked]);

    return(
        <button className={styles.loadMoreButton + " " + (isClicked && styles.active)} onClick={() => {
            setPagination(pagination + 1);
            setIsClicked(true);
        }}>Load more <AiOutlineReload /></button>
    )
}