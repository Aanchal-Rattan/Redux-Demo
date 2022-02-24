import React, { useState } from 'react'
import { connect } from 'react-redux'

function Bat(props) {
    // const [bat,setBat] = useState(20)
    // console.log(props.bats)
    return (
        <div>
            <h1 > Bats : {props.batss}</h1>
        {/* <button onClick={()=> setBat(bat-1) }>Buy Bat</button> */}
        <button onClick={ props.buyBat }>Buy Bat</button>
        </div>
    )
}

//provides state from global store
const mapStateToProps = (state) => {
    return {
        batss: state.bat.bats
    }
}

//changes the state 
const mapDispatchToProps = (dispatch) =>{
    return {
        buyBat: ()=> dispatch({type:"BUY_BAT"})   //action 
        //dispatch sends the object to the reducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Bat)