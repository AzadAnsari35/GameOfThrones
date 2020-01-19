import axios from 'axios'
import {
    CHARACTERS_LOADED,
    CHARACTER_LOADED
} from './types'



export const loadCharacters = (page) => async dispatch => {

    try {
        const res = await axios.get(`https://anapioficeandfire.com/api/characters?page=${page}&pageSize=12`);
        console.log(res.data)

        dispatch({
            type: CHARACTERS_LOADED,
            payload: res.data
        });
    } catch (err) {
        // dispatch({
        //     type:ERROR
        // });
    }
};

export const loadCharacter = id => async dispatch => {
    console.log('working character')

    try {
        const res = await axios.get(`https://anapioficeandfire.com/api/characters/${id}`);
        console.log('character', res.data)

        dispatch({
            type: CHARACTER_LOADED,
            payload: res.data
        });
    } catch (err) {
        console.log(err)
    }
};
