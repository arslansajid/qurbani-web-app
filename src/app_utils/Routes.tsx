import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';
import HomePage from '../pages/HomePage';
import BuyPage from '../pages/BuyPage';
import SellPage from '../pages/SellPage';
import AnimalDetailPage from '../pages/AnimalDetailPage';
import ContactusPage from '../pages/ContactusPage';

import Navbar from '../components/ZNavbar';
import Footer from '../components/ZFooter';

import {AppProvider} from '../Context/AppContext';

const RouterRoutes = () => {
    const [store, setStore] = useState({
        city: null,
        category: null,
        weight: null,
        price: null,
        animals: [],
    })
    
    useEffect(() => {
        console.log("############## UPDATED VALUE #########", store)
    }, [store])

    const updateStoreData = (key, value) => {
        console.log("updateFilters called with", {key, value});
        setStore({ ...store, [key]: value })
    }

    return (
        <AppProvider
            value={{
                storeData: store,
                setFilter: updateStoreData,
          }}
        >
            <Router>
                <Navbar />
                <Switch>{[UnauthenticatedRoutes, <Route key={1} component={NotFoundPage} />]}</Switch>
                <Footer />
            </Router>
        </AppProvider>
    );
};

const UnauthenticatedRoutes = [
    <Route exact path='/' component={HomePage} />,
    <Route exact path='/buy' component={BuyPage} />,
    <Route exact path='/sell' component={SellPage} />,
    <Route exact path='/animal-detail' component={AnimalDetailPage} />,
    <Route exact path='/contact-us' component={ContactusPage} />,
];

// const AuthenticatedRoutes = [];

export default RouterRoutes;
