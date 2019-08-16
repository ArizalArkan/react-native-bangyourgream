import { combineReducers } from 'redux'

import user from '../reducer/user'
import leaderboard from '../reducer/Leaderboard'

const appReducer = combineReducers({
    user,
    leaderboard
})

export default appReducer