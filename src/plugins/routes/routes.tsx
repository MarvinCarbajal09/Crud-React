import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthPage from '../../pages/AuthPage'
import HomePage from '../../components/home/HomeContent'
// import LoginComponent from '../../components/auth/LoginComponent';
// import HomeContent from '../../components/home/HomeContent'

// import Roles from '../components/Rol/ContentRol';


const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="/home" element={<HomePage />} />
                {/* <Route path="/roles" element={<Roles />} /> */}
            </Routes>
        </Router>
    );
};
export default AppRoutes;
