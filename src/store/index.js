import {createStore,combineReducers} from "redux"
import counterReducer from './counter/reducer'
import colorReducer from './color/reducer'

const rootReducer = combineReducers({counter:counterReducer,color:colorReducer})
const store = createStore(rootReducer)

export default store;