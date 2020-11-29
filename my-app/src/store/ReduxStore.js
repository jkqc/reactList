import {createStore} from 'redux'

const countReducer = (state=0,action) => {
    console.log(action)
    switch(action.type)
    {
        case 'ADD':
            state = state + 1
            break
        case "MIN":
            state = state -1
            break
        default:
            state = 0
            break
    }
    return state

}

const store = createStore(countReducer)
export default store;