import React from 'react';
import '../../App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../Admin/Home';
import ShopHomePage from '../Shop/ShopHomePage';
import Login from '../Admin/Login';
import ErrorPage from '../ErrorPage';
function App(){
    return(
        <Router>
            <Switch>
                <Route exact  path="/admin" component={Login} />
                <Route exact path="/" component={ShopHomePage} />
                <Route exact path="/admin/home" component={Home} />
                <Route  component={ErrorPage} />
            </Switch>
        </Router>
    )
}

export default App;