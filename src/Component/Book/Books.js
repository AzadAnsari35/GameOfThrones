import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { loadBook } from "../../actions/book"
import MainListBook from './MainBookPage'

const House = ({ book: { book, loading }, match, loadBook }) => {


    useEffect(() => {
        console.log('chracter useeffect')
        loadBook(match.params.id)
    }, [match.params.id])


    return (
        <div>
            <MainListBook obj={book} loading={loading} />
        </div>
    )
}



const mapStateToProps = state => ({
    book: state.book,
});

export default connect(mapStateToProps, { loadBook })(House)