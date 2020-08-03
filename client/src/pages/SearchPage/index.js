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
        return (
            <Container>
                <Row>
                    <Column size='md-12' id='searchCol'>
                        <Card id='searchCard'>
                            <h1>Hello there</h1>
                        </Card>
                    </Column>
                </Row>
            </Container>
        )
    }
}

export default Search;
