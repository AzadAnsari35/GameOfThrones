import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { loadHouse } from "../../actions/house"
import MainPageHouse from '../House/MainPageHouse'

const House = ({ house: { house, loading }, match, loadHouse }) => {


    useEffect(() => {
        console.log('chracter useeffect')
        loadHouse(match.params.id)
    }, [match.params.id])


    return (
        <div>
            <MainPageHouse obj={house} loading={loading} />
        </div>
    )
}



const mapStateToProps = state => ({
    house: state.house,
});

export default connect(mapStateToProps, { loadHouse })(House)