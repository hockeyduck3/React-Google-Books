import React, { Component } from 'react';

import { Container, Row, Column } from '../../components/Grid/index';
import Card from '../../components/Card/index';
import API from '../../util/API';

import './searchPage.css';

class Search extends Component {
    state = {
        search: '',
        results: []
    }

    inputFunc = event => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }

    searchFunc = event => {
        event.preventDefault();

        let validateError = false;

        if (this.state.search === '') {
            validateError = true;
            this.displayError();
        }
    }

    displayError = () => {
        const searchBar = document.getElementById('inputGroup');

        searchBar.classList.add('animate__animated', 'animate__shakeX');

        setTimeout(() => {
            searchBar.classList.remove('animate__animated', 'animate__shakeX');
        }, 600)

    }

    render() {
        const res = this.state.results;
        return (
            <Container fluid={true}>
                <Row>
                    {/* Search Bar */}
                    <Column size='md-12' id='searchCol'>
                        <h1 id='searchFor'>Search for a book</h1>
                        <form className='searchBar' onSubmit={this.searchFunc}>
                            <div className='input-group' id='inputGroup'>
                                <input type='text' className='searchInput' name='search' placeholder='Type the name of a book' onChange={this.inputFunc} />
                
                                <div className='input-group-append'>
                                    <button type='submit' className='searchBtn'>Search</button>
                                </div>
                            </div>
                        </form>
                    </Column>

                    {/* Results */}
                    <Column size='md-12' id='resultsCol'>
                        {res.length !== 0 ? (
                            <Card id='resultsCard'>
                                <placeholder />
                            </Card>
                        ) : (
                            <hr />
                        )}
                    </Column>
                </Row>
            </Container>
        )
    }
}

export default Search;
