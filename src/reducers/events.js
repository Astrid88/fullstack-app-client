
import { GET_EVENTS, GET_SELECTED_EVENT } from '../actions/events'

const initialState = {

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_EVENTS:
            return { events: action.payload }
        case GET_SELECTED_EVENT:
            return { ...state, ...action.payload }
        default:
            return state
    }
}