import axios from 'axios'
import {
    BOOKS_LOADED,
    BOOK_LOADED
} from './types'

export const loadBooks = (page) => async dispatch => {

    try {
        const res = await axios.get(`https://anapioficeandfire.com/api/books?page=${page}&pageSize=12`);
        console.log('books data', res.data)

        dispatch({
            type: BOOKS_LOADED,
            payload: res.data
        });
    } catch (err) {
        // dispatch({
        //     type:ERROR
        // });
    }
};

export const loadBook = id => async dispatch => {
    console.log('working character')

    try {
        const res = await axios.get(`https://anapioficeandfire.com/api/books/${id}`);
        console.log('character', res.data)

        dispatch({
            type: BOOK_LOADED,
            payload: res.data
        });
    } catch (err) {
        console.log(err)
    }
};