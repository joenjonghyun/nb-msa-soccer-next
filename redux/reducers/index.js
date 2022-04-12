import {combineReducers} from 'redux'
import adminReducer from './admin.reducer'
import basicReducer from './basic.reducer'
import boardReducer from './board.reducer'
import gameReducer from './game.reducer'
import todoReducer from './todo.reducer'
import uesrReducer from './user.reducer'

const rootReducer = combineReducers({
    adminReducer,
    basicReducer,
    boardReducer,
    gameReducer,
    todoReducer,
    uesrReducer
})
export default rootReducer