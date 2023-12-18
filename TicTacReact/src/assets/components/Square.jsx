import React, { useState } from 'react'

function Square({ value, onSquareClick }) {
  return (
    <button className="btn" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square