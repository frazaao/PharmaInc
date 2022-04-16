import { useEffect, useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import styles from './styles.module.css';
import { useUsers } from '../../contexts/userContext';
import { useParams, useNavigate } from 'react-router-dom';

export function UserProfileModal(){

    const { users, pagination, setPagination } = useUsers();
    const modalRef = useRef(null);
    const { id } = useParams();
    const navigate = useNavigate();

    let date;

    const [ user ] = users.filter(user => {
        return user.login.uuid == id && user
    });
    
    if(user){
        date = new Date(user.dob.date);
    }

    if(!user){
        setTimeout(() => {
            setPagination(pagination + 1);
        }, 2000);
    }

    return (
        <div 
            className={styles.modalContainer} 
            ref={modalRef} onClick={
                ({target}) => { 
                    target == modalRef.current && navigate('/');
                }
            }
        >
            { user ? (
                <div className={styles.modalContent}>

                    <button 
                        className={styles.buttonCloseModal}
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        <IoClose />
                    </button>

                    <div className={styles.profilePicture}>
                        <img src={user.picture.large} alt={user.name.first} />
                    </div>

                    <ul className={styles.profileInformations}>
                        <li>
                            <p>Complete name: </p>
                            <span>{user.name.first + " " + user.name.last}</span>
                        </li>

                        <li>
                            <p>Email: </p>
                            <span>{user.email}</span>
                        </li>

                        <li>
                            <p>Gender: </p>
                            <span>{user.gender}</span>
                        </li>

                        <li>
                            <p>Birth date: </p>
                            <span>{ date && (`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`) }</span>
                        </li>

                        <li>
                            <p>Phone number: </p>
                            <span>{ user.cell }</span>
                        </li>

                        <li>
                            <p>Nationality: </p>
                            <span>{ user.nat }</span>
                        </li>

                        <li>
                            <p>Address: </p>
                            <span>{ user.location.street.name + " " + user.location.street.number }</span>
                        </li>

                        <li>
                            <p>ID: </p>
                            <span>{ user.login.uuid }</span>
                        </li>

                        <li>
                            <p>URL: </p>
                            <span>{document.documentURI}</span>
                        </li>
                    </ul>
                </div>

            ) : (<h1>Loading...</h1>) }
        </div>
    );
}