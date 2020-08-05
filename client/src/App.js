import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav/index';
import SearchPage from './pages/SearchPage/index';
import SavedPage from './pages/SavedPage/index';

function App() {
    return (
        <Router basename='/'>
            <div>
                <Nav />
                <Switch>
                    <Route exact path='/' component={SearchPage}/>
                    <Route exact path='/Saved' component={SavedPage}/>
                </Switch>
            </div>
        </Router>
    )
}

export default App;
