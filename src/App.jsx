import React from 'react';
import { Header } from './components/Header';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { FahrkostenCalculator } from './components/FahrkostenCalculator';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { SoftwareTesting } from './components/SoftwareTesting';

const App = () => {
    return(
        <div>
            <Header />
            <div style={{padding: "1em"}}>
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/trip_calc" component={FahrkostenCalculator} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/software_testing" component={SoftwareTesting} />
                </Switch>
            </HashRouter>
            </div>
        </div>
    )
}

export default App;