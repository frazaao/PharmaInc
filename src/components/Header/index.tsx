import Logo from '../../assets/images/PharmaInc.png';
import { FaUserCircle } from 'react-icons/fa';
import styles from './styles.module.css';

export function Header(){
    return (
        <header className={styles.headerContainer}>
            <div className={styles.logoContainer}>
                <a href="#">
                    <img src={Logo} alt="Pharma Inc Logotype" />
                    <span>Pharma-Inc</span>
                </a>
            </div>
            <div className={styles.userContainer}>
                <a href="#">
                    <FaUserCircle />
                </a>
            </div>
        </header>
    )
}