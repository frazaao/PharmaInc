import { Header } from "./components/Header";
import { PatientList } from "./components/PatientList";
import UserProvider from './contexts/userContext';
import SearchProvider from './contexts/searchContext';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <UserProvider>
      <SearchProvider>
          <Header />
          <Routes>
            <Route path="/*" element={ <PatientList /> } />
          </Routes>
      </SearchProvider>
    </UserProvider>
  )
}

export default App
