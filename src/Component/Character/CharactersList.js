import React from 'react'
import MainList from '../MainList'
import { connect } from "react-redux";
import { loadCharacters } from "../../actions/character"

const CharactersList = ({ character: { characters, loading }, loadCharacters }) => {

    return (
        <div>
            {/* <Characters type={'loadAll'} /> */}
            <MainList list={characters} load={loadCharacters} loading={loading} type={'characters'} />
        </div>
    )
}

const mapStateToProps = state => ({
    character: state.character,
});

export default connect(mapStateToProps, { loadCharacters })(CharactersList)