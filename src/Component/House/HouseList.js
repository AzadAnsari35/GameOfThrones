import React from 'react'
import MainList from '../MainList'
import { connect } from "react-redux";
import { loadHouses } from "../../actions/house"

const HouseList = ({ house: { houses, loading }, loadHouses }) => {

    return (
        <div>
            {/* <Characters type={'loadAll'} /> */}
            <MainList list={houses} load={loadHouses} loading={loading} type={'houses'} />
        </div>
    )
}

const mapStateToProps = state => ({
    house: state.house,
});

export default connect(mapStateToProps, { loadHouses })(HouseList)