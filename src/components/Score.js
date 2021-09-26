import React from 'react'

export default function Score({score,ishanged,resetGame}) {
    return (
        <div className="result">
            {
            ishanged?
            <h1>You could not save his life !</h1>
            :<h1>Opps, your time is up !</h1>
            
            }
            
            <div className="points">Your score is {score} points</div>
            <button onClick={resetGame}>Try again</button>
            
        </div>
    )
}
