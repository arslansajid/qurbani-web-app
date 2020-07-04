import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import BuyPage from '../pages/BuyPage';
import SellPage from '../pages/SellPage';
import ContactusPage from '../pages/ContactusPage';

import Navbar from '../components/ZNavbar';
import Footer from '../components/ZFooter';

const RouterRoutes = () => {
    return (
        <Router>
            <Navbar />
            <Switch>{[UnauthenticatedRoutes, <Route key={1} component={NotFoundPage} />]}</Switch>
            <Footer />
        </Router>
    );
};

const UnauthenticatedRoutes = [
    <Route exact path='/' component={HomePage} />,
    <Route exact path='/buy' component={BuyPage} />,
    <Route exact path='/sell' component={SellPage} />,
    <Route exact path='/contact-us' component={ContactusPage} />,
];

const AuthenticatedRoutes = [];

export default RouterRoutes;
