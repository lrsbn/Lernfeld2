import React from 'react';
import { Header } from './components/Header';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import Fahrkosten  from './components/Fahrkosten';
import { FahrkostenCalculator } from './components/FahrkostenCalculator';
import { About } from './components/About';

const App = () => {
    return(
        <div>
            <Header />
            <div style={{padding: "1em"}}>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/trip_calc" component={FahrkostenCalculator} />
                </Switch>
            </HashRouter>
            </div>
        </div>
    )
}

export default App;