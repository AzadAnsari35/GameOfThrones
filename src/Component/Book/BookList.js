import React from 'react'
import MainList from '../MainList'
import { connect } from "react-redux";
import { loadBooks } from "../../actions/book"

const BookList = ({ book: { books, loading }, loadBooks }) => {

    return (
        <div>
            {/* <Characters type={'loadAll'} /> */}
            <MainList list={books} load={loadBooks} loading={loading} type={'books'} />
        </div>
    )
}

const mapStateToProps = state => ({
    book: state.book,
});

export default connect(mapStateToProps, { loadBooks })(BookList)