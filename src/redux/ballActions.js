//we can do preprocessing here
export const buyBall = (qty) => {
    return {
        type : "BUY_BALL",
        payload:qty 
    }
}
