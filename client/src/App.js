import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav/index';
import SearchPage from './pages/SearchPage/index';

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path='/' component={SearchPage}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App;
