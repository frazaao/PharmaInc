import { Route, Routes } from "react-router-dom";
import { Hero } from "../Hero";
import { LoadMore } from "../LoadMore";
import { Search } from "../Search";
import { UserProfileModal } from "../UserProfileModal";
import { UsersTable } from "../UsersTable";
import styles from './styles.module.css';

export function PatientList(){
    return(        
      <main className={styles.mainContainer}>
          <Hero />
          <Search />
          <UsersTable />
          <Routes>
            <Route path="view/:id" element={ <UserProfileModal /> } />
          </Routes>
          <LoadMore />
      </main>
    )
}