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

        if (!validateError) {
            API.searchForBook(this.state.search).then(res => {
                this.setState({
                    results: res.data.items
                });

                console.log(this.state.results);
            })
        }
    }

    saveFunc = (book, id) => {
        const button = document.getElementById(id);

        button.classList.replace('saveBtn', 'disabledBtn');
        button.innerHTML = 'Saved';
        button.disabled = true;

        localStorage.setItem(id, id);

        API.saveBook(book).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
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
                            <Container>
                                <Card id='resultsCard'>
                                    <h2>Results</h2>
                                    <hr />
                                    {
                                        res.map((book, i) => {
                                            // This will be used to store the Authors info
                                            let authorRes = [];

                                            // This will run first to check and see if the book has an Author.
                                            if (book.volumeInfo.authors === undefined) {
                                                authorRes.push('Unknown');
                                            }

                                            // If there is more than one author run this for loop
                                            else if (book.volumeInfo.authors.length > 1) {
                                                // Because the authors come in an array this space needs to be added manually
                                                const spc = ', ';

                                                // Loop over the array
                                                for (let i = 0; i < book.volumeInfo.authors.length; i++) {
                                                    // Check and see if it's on the last item of the array
                                                    if (i !== book.volumeInfo.authors.length - 1) {
                                                        let a =  book.volumeInfo.authors[i];
    
                                                        authorRes.push(a);
                                                        authorRes.push(spc);
                                                    } else {
                                                        let a =  book.volumeInfo.authors[i];
    
                                                        authorRes.push(a);
                                                    }
                                                }
                                            } 

                                            // If there is only one author then just add them
                                            else {
                                                authorRes.push(book.volumeInfo.authors);
                                            }
                                            
                                            let imageLink;
                                            
                                            return (
                                                <Card id='resultsCard' key={i}>
                                                    {book.volumeInfo.imageLinks !== undefined ? (
                                                        imageLink = book.volumeInfo.imageLinks.thumbnail,
                                                        <img className='bookImage' src={book.volumeInfo.imageLinks.thumbnail} alt={`Book cover for ${book.volumeInfo.title}`} />
                                                    ) : (
                                                        imageLink = './images/no-image.jpg',
                                                        <img className='bookImage' src='./images/no-image.jpg' alt='Unknown book cover' />
                                                    )}

                                                    {localStorage.getItem(book.id) === null ? (
                                                        <button id={book.id} className='saveBtn' onClick={() => this.saveFunc({
                                                            bookId: book.id,
                                                            title: book.volumeInfo.title,
                                                            authors: authorRes,
                                                            categories: book.volumeInfo.categories,
                                                            description: book.volumeInfo.description,
                                                            image: imageLink,
                                                            link: book.volumeInfo.infoLink
                                                        }, book.id)}>Save Book</button>
                                                    ) : (
                                                        <button className='disabledBtn' disabled={true}>Saved</button>
                                                    )}    
                                                    <a className='bookLink' href={book.volumeInfo.infoLink} target='_blank' rel='noopener noreferrer'>View Book</a>
                                                    <p className='bookTitle'>{book.volumeInfo.title}</p>
                                                    <p className='bookAuthors'>By: {authorRes}</p>
                                                    <p className='bookCategory'>Category: {book.volumeInfo.categories}</p>
                                                    <p className='bookDescription'>{book.volumeInfo.description}</p>
                                                </Card>
                                            ) 
                                        })
                                    }
                                </Card>
                            </Container>
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
