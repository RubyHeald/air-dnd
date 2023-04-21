import './Chat.css'
import { useState } from 'react'

function Chat({ setShowChat }) {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    if (message.length == 0) return
    setMessages([...messages, message])
    setMessage('')
  }

  return (
    <>
      <div className='scrim' onClick={() => setShowChat(false)}></div>
      <div className='chat'>
        <h2>Customer support</h2>
        <div className='messages'>
          {messages.map((msg, i) => (
            <p key={i}>You: {msg}</p>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <button>
            <span className='material-icons'>send</span>
          </button>
        </form>
      </div>
    </>
  )
}

export default Chat
