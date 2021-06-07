import React from 'react';
import { Header } from './components/Header';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Calc } from './components/Calc';
import { Home } from './components/Home';
import Fahrkosten  from './components/Fahrkosten';
import './App.css';

const App = () => {
    return(
        <div>
            <Header />
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/calc" component={Calc} />
                    <Route exact path="/Fahrkosten" component={Fahrkosten} />
                </Switch>
            </HashRouter>
        </div>
    )
}

export default App;