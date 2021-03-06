import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { PokemonDetailPage } from '../pages/PokemonDetailPage'
import {PokemonListPage} from '../pages/PokemonListPage'

export const Router = () => {
    return(
        <BrowserRouter>
             <Switch>
                <Route exact path={"/"} component={PokemonListPage}/>
                <Route exact path={"/detalhe/:nome"} component={PokemonDetailPage}/>
                <Route>
                    <div><h1>Error 404!</h1></div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}