import React from 'react';
import Header from '../Header/Header';
import Router from '../../routers/Router';
function Layout() {
    return (
        <>
            <Header />
            <div>
                <Router />
            </div>
        </>
    );
}

export default Layout;
