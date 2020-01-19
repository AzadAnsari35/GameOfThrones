import {
    BOOKS_LOADED,
    BOOK_LOADED
} from '../actions/types'


const initialState = {
    books: [],
    book: {},
    loading: true
}


export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {



        case BOOKS_LOADED:
            return {
                ...state,
                books: payload,
                loading: false
            }

        case BOOK_LOADED:
            return {
                ...state,
                book: payload,
                loading: false
            }


        default:
            return state

    }

}