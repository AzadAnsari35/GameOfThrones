import { combineReducers } from 'redux';
import character from './character'
import house from './house'
import book from './book'

export default combineReducers({
    character,
    house,
    book
});
