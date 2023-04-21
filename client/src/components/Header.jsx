import './Header.css'
import Dtwenty from './Dtwenty'

function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
      <Dtwenty />
      <button className='icon-btn'>
        <span className='material-icons'>person</span>
      </button>
      <button className='icon-btn'>
        <span className='material-icons'>menu</span>
      </button>
    </header>
  )
}

export default Header
