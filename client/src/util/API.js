import axios from 'axios';

export default {
    searchForBook: (bookName) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`);
    },

    saveBook: (data) => {
        return axios.post('/api/books', data);
    }
}