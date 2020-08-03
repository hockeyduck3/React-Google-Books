import React, { Component } from 'react';

import { Container, Row, Column } from '../../components/Grid/index';
import Card from '../../components/Card/index';

import './searchPage.css';

class Search extends Component {
    state = {
        results: []
    }

    inputFunc = () => {

    }

    render() {
        const res = this.state.results;
        return (
            <Container fluid={true}>
                <Row>
                    {/* Search Bar */}
                    <Column size='md-12' id='searchCol'>
                        <Card id='searchCard'>
                            <h1>Hello there</h1>
                        </Card>
                    </Column>

                    {/* Results */}
                    <Column size='md-12' id='resultsCol'>
                        <Card id='resultsCard'>
                            {res.length !== 0 ? (
                                <h1>Results placeholder</h1>
                            ) : (
                                <h1>No results yet. Use the search bar above to search for a book!</h1>
                            )}
                        </Card>
                    </Column>
                </Row>
            </Container>
        )
    }
}

export default Search;
