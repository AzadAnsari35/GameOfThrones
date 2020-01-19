import axios from 'axios'
import {
    HOUSES_LOADED,
    HOUSE_LOADED
} from './types'

export const loadHouses = (page) => async dispatch => {

    try {
        const res = await axios.get(`https://anapioficeandfire.com/api/houses?page=${page}&pageSize=12`);
        console.log(res.data)

        dispatch({
            type: HOUSES_LOADED,
            payload: res.data
        });
    } catch (err) {
        // dispatch({
        //     type:ERROR
        // });
    }
};

export const loadHouse = id => async dispatch => {
    console.log('working character')

    try {
        const res = await axios.get(`https://anapioficeandfire.com/api/houses/${id}`);
        console.log('character', res.data)

        dispatch({
            type: HOUSE_LOADED,
            payload: res.data
        });
    } catch (err) {
        console.log(err)
    }
};