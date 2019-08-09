import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Header from '../elements/Header/Header';
import Home from '../Home/Home';
import Movie from '../Movie/Movie';
import Liked from '../Liked/Liked';
import NotFound from '../elements/NotFound/NotFound';

const App = () => {
    return (
        <BrowserRouter basename='/react-movie-app/'>
            <React.Fragment>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/liked" component={Liked} exact />
                    <Route path="/:movieId" component={Movie} exact />
                    <Route component={NotFound} />
                </Switch>

            </React.Fragment>
        </BrowserRouter>
    )
}

export default App;