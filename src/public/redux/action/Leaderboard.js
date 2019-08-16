import axios from 'axios'

export const getLeaderBoard = () => {
    return {
        type: 'GET_LEADERBOARDS',
        payload: axios.get(`http://192.168.6.136:2019/score`)
    }
}
