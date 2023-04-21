import './Dtwenty.css'
import { useState } from 'react'

function Dtwenty() {
  const [num, setNum] = useState(0)

  function handleClick() {
    setNum(1 + Math.floor(Math.random() * 20))
  }

  return (
    <div>
      <button onClick={handleClick}>D20</button>
      <span className='roll'>{num > 0 && num}</span>
    </div>
  )
}

export default Dtwenty
