import React from 'react'

function QuizResult(props) {
    return (
        <>
            <div className='show-score'>
                Your Marks:{props.score}<br />
                Total Marks:{props.totalScore} <br />
                Percentage:{(props.score / props.totalScore) * 100}%
            </div>
            <button id="next-button" onClick={props.tryAgain}>Try Again</button>
        </>
    )
}

export default QuizResult