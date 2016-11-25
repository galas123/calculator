import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'

const store = createStore(reducer, {})

window.store = store
export default store

