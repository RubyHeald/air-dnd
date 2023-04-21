import Header from './components/Header'
import Footer from './components/Footer'
import Venue from './components/Venue'
import Chat from './components/Chat'
import api from './services/api'
import { useState, useEffect } from 'react'

function App() {
  const [venues, setVenues] = useState([])
  const [showChat, setShowChat] = useState(false)

  useEffect(() => {
    fetchVenues()
  }, [])

  async function fetchVenues() {
    setVenues(await api.get('venue'))
  }

  async function likeVenue(venue) {
    const data = await api.put(`venue/${venue.id}`, { likes: venue.likes + 1 })
    setVenues(venues.map(v => (v.id == data.id ? data : v)))
  }

  return (
    <>
      <Header title={'Airdnd'} />
      <main>
        {venues.map(venue => (
          <Venue key={venue.id} venue={venue} likeVenue={likeVenue} />
        ))}
        {showChat && <Chat setShowChat={setShowChat} />}
      </main>
      <Footer showChat={showChat} setShowChat={setShowChat} />
    </>
  )
}

export default App
