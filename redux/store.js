import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import reactGA from 'react-ga';
import { routerMiddleware } from 'connected-react-router';
import reducers from './Reducers';

export const history = createBrowserHistory();

history.listen((location) => {
    reactGA.pageview(location.pathname);
});

const initial = window.__INITIAL__;

const devTools =
    localStorage.getItem('login') || process.env.NODE_ENV === 'development';

export default createStore(
    reducers(history),
    initial,
    devTools
        ? composeWithDevTools(
              applyMiddleware(reduxThunk, routerMiddleware(history))
          )
        : applyMiddleware(reduxThunk, routerMiddleware(history))
);
