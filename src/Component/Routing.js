import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home/Home';
import Footer from './Footer';
import Header from './Header';


const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default Routing;