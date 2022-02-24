const initialState = {
    balls :50
}

const BallReducer = (state=initialState, action )=>{
    switch(action.type){
        case 'BUY_BALL':
            return {...state,balls:state.balls-action.payload}
        case 'SET_BALL':
            return {...state,balls:state.balls+1}

        default:
            return state; 
    }
    return state 
}

export default BallReducer