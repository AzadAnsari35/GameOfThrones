import {
    CHARACTERS_LOADED,
    CHARACTER_LOADED
} from '../actions/types'


const initialState = {
    characters: [],
    character: {},
    loading: true
}


export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {



        case CHARACTERS_LOADED:
            return {
                ...state,
                characters: payload,
                loading: false
            }

        case CHARACTER_LOADED:
            return {
                ...state,
                character: payload,
                loading: false
            }


        default:
            return state

    }

}