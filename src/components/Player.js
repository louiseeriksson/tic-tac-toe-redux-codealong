import React from 'react'

export const Player = ({ value }) => (
  <>
    {value === 'x' && <span role="img" aria-label="melon">🍉</span>}
    {value === 'o' && <span role="img" aria-label="lemon">🍋</span>}
  </>
)
