import React from 'react'
import { Route, Switch } from 'react-router-dom';
import CharactersList from '../Character/CharactersList'
import Character from '../Character/Character'
import HouseList from '../House/HouseList'
import BookList from '../Book/BookList'
import House from '../House/House'
import Book from '../Book/Books'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path='/characters' component={CharactersList} />
                <Route path='/houses' component={HouseList} />
                <Route path='/books' component={BookList} />


            </Switch>
            <Switch>
                <Route path='/characters/:id' component={Character} />
                <Route path='/houses/:id' component={House} />
                <Route path='/books/:id' component={Book} />
            </Switch>
        </div>
    )
}

export default Routes