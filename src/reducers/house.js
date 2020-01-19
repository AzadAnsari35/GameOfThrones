import {
    HOUSES_LOADED,
    HOUSE_LOADED
} from '../actions/types'


const initialState = {
    houses: [],
    house: {},
    loading: true
}


export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {



        case HOUSES_LOADED:
            return {
                ...state,
                houses: payload,
                loading: false
            }

        case HOUSE_LOADED:
            return {
                ...state,
                house: payload,
                loading: false
            }


        default:
            return state

    }

}