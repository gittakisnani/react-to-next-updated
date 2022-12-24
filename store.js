import { createStore, compose } from 'redux'
import rootReducer from './reducer/rootReducer';

// const middleware = [thunk]

const store = createStore(rootReducer, compose(
    // applyMiddleware(...middleware),
    typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
export default store