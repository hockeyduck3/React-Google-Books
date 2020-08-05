import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Column } from '../../components/Grid/index';
import Card from '../../components/Card/index';
import API from '../../util/API';

import './savedPage.css';

class Saved extends Component {
    state = {
        results: []
    }

    componentDidMount() {
        API.grabAllBooks().then(books => {
            this.setState({
                results: books.data
            });

            console.log(this.state.results);

        }).catch(err => console.log(err));
    }

    render() {
        const res = this.state.results;

        return (
            <div>
                {res.length > 0 ? (
                    <Container>
                        <Row>
                            <Column size='md-12' id='savedCol'>
                                <Card id='resultsCard'>
                                    <h2>Saved Books</h2>
                                    <hr />
                                    {
                                        res.map((book, i) => {
                                            return (
                                                <Card id='resultsCard' key={i}>
                                                    {book.image !== undefined ? (
                                                        <img className='bookImage' src={book.image} alt={`Book cover for ${book.title}`} />
                                                    ) : (
                                                        <img className='bookImage' src='./images/no-image.jpg' alt='Unknown book cover' />
                                                    )}
                                                    <button className='disabledBtn'>Delete</button>
                                                    <a className='bookLink' href={book.link} target='_blank' rel='noopener noreferrer'>View Book</a>
                                                    <p className='bookTitle'>{book.title}</p>
                                                    <p className='bookAuthors'>By: {book.authors}</p>
                                                    <p className='bookCategory'>Category: {book.categories}</p>
                                                    <p className='bookDescription'>{book.description}</p>
                                                </Card>
                                            ) 
                                        })
                                    }
                                </Card>
                            </Column>
                        </Row>
                    </Container>
                ) : (
                    <div className='noResults'>
                        <h1>Looks like there aren't any saved books yet.</h1>
                        <h2>Head to the <Link to='/'>Search Page</Link> to find some books!</h2>
                        <hr />
                    </div>
                )}
            </div>
        )
    }
}

export default Saved;
