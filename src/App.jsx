import React from 'react';
import { Header } from './components/Header';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Calc } from './components/Calc';
import { Home } from './components/Home';

const App = () => {
    return(
        <div>
            <Header />
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/calc" component={Calc} />
                </Switch>
            </HashRouter>
        </div>
    )
}

export default App;