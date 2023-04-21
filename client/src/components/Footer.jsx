import './Footer.css'

function Footer({ year, showChat, setShowChat }) {
  return (
    <footer>
      <button className='show-chat' onClick={() => setShowChat(!showChat)}>
        <span className='material-icons show-chat-btn'>
          {showChat ? 'close' : 'chat'}
        </span>
      </button>
      <span>&copy; {new Date().getFullYear()}</span>
    </footer>
  )
}

export default Footer
