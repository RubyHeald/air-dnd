import './Venue.css'

function Venue({ venue, likeVenue }) {
  return (
    <article>
      <img src={venue.imgUrl}></img>
      <div className='venue-title'>
        <h2>{venue.title}</h2>
        <button className='like-btn' onClick={() => likeVenue(venue)}>
          <span className='material-icons like-icon'>thumb_up</span>
        </button>
        <span className='likes'>{venue.likes}</span>
      </div>
      <div className='venue-details'>
        <span>{venue.available ? 'available' : 'unavailable'}</span>
        {venue.available && <button>Book now</button>}
      </div>
    </article>
  )
}

export default Venue
