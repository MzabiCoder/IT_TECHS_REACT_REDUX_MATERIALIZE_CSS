import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootRreducer from './reducers'

const Istate = {}
const middleware = [thunk]
const store = createStore(rootRreducer, Istate, composeWithDevTools(applyMiddleware(...middleware)))

export default store