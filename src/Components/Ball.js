import React, { useState } from 'react'
import { connect } from 'react-redux'

function Ball({ balls, buyBall, sellBall }) {
    // const [bat,setBat] = useState(20)
    // console.log(props.bats)
    const [qty,setQty ]= useState(1)
    return (
        <div>
            <h1> Balls:{balls}</h1>
            <input type="number" value={qty} onChange={(e)=>setQty(e.target.value )}/>

            {/* <h1 > Bats : {props.batss}</h1> */}
            {/* <button onClick={()=> setBat(bat-1) }>Buy Bat</button> */}
            <button onClick={()=>buyBall(qty)}>Buy</button>
            <button onClick={sellBall}>Sell</button>

        </div>
    )
}

//provides state from global store
const mapStateToProps = (state) => {
    return {
        ball: state.ball.balls
    }
}

//changes the state 
const mapDispatchToProps = (dispatch) => {
    return {
        buyBall: (qty) => dispatch({ type: "BUY_BALL" , payload:qty}),  //action 
        sellBall: () => dispatch({ type: "SELL_BALL" })
        //dispatch sends the object to the reducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ball)
