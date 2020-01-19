import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { loadCharacter } from "../../actions/character"
import MainCharacterPage from './MainCharacterPage'

const Character = ({ character: { character, loading }, match, loadCharacter }) => {


    useEffect(() => {
        console.log('chracter useeffect')
        loadCharacter(match.params.id)
    }, [match.params.id])


    return (
        <div>
            <MainCharacterPage obj={character} loading={loading} />
        </div>
    )
}



const mapStateToProps = state => ({
    character: state.character,
});

export default connect(mapStateToProps, { loadCharacter })(Character)