import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { game } from 'reducers/game'
import { Player } from 'components/Player'

export const Stats = () => {
  const dispatch = useDispatch()
  const winner = useSelector((store) => store.game.winner)
  const nextPlayer = useSelector((store) => store.game.player)

  const handleButtonPress = () => {
    dispatch(game.actions.restart())
  }

  if (winner) {
    return (
      <div className="stats">
        <div className='next-player'>
          <p>Yay, the winner is:</p>
          <h1><Player value={winner} /></h1>
        </div>
        <button type="button" onClick={handleButtonPress}>START NEW GAME</button>
      </div>
    )
  }

  return (
    <div className="stats">
      <div className='next-player'>
        <p>Next up is:</p>
        <h1><Player value={nextPlayer} /></h1>
      </div>
      <button type="button" onClick={handleButtonPress}>RESTART GAME</button>
    </div >
  )
}
