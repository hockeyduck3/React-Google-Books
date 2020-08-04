import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import API from '../../util/API';

import './savedPage.css';

class Saved extends Component {
    state = {
        results: []
    }

    render() {
        return (
            <div className='noResults'>
                <h1>Looks like there aren't any saved books yet.</h1>
                <h2>Head to the <Link to='/'>Search Page</Link> to find some books!</h2>
                <hr />
            </div>
        )
    }
}

export default Saved;
