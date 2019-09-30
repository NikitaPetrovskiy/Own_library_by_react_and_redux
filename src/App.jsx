import React from 'react';
import { createStore } from "redux";
import { Provider} from "react-redux";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import { LibraryReducer } from "./Store";
import { ConnectedOwnLibrary } from "./Components";
import { ConnectedAddBookForm } from "./Components/AddBookForm";

const LibraryStore = createStore(LibraryReducer);


const NotFound = () => (
    <>
        <h1>Страница не найдена</h1>
        <Link to="/books">Вернуться к списку книг</Link>
    </>
);

export const App = (props) => {
    return (
        <BrowserRouter>
            <Provider store={LibraryStore}>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/books" />} />
                    <Route exact path="/books" component={ConnectedOwnLibrary} />
                    <Route path="/books/new" component={ConnectedAddBookForm} />
                    <Route component={NotFound} />
                </Switch>
            </Provider>
        </BrowserRouter>
    )
};
