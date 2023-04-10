import './index.css'

const ScoreBoard = props => {
  const {score, playAgain} = props

  const onClickPlayAgainButton = () => {
    playAgain()
  }

  return (
    <div className="score-board-container">
      <img
        className="trophy-image"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p className="your-score-para">Your Score</p>
      <p className="score-result">{score}</p>
      <button
        type="button"
        className="play-again-button"
        onClick={onClickPlayAgainButton}
      >
        <img
          className="reset-image"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        <p className="play-again-para">PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default ScoreBoard
