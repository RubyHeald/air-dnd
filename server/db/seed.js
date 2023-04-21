// https://imgbox.com/gallery/edit/3Uwk90C1Iu/TM9QG0JpWaaaOvsR

const db = require('./config')
const { Venue } = require('../models')

async function seed() {
  await db.sync({ force: true })
  const venues = [
    {
      title: 'Spooky castle',
      imgUrl: 'https://images2.imgbox.com/ce/94/0fH9OqSV_o.jpg',
      available: true,
      likes: 17
    },
    {
      title: 'River hideout',
      imgUrl: 'https://images2.imgbox.com/19/21/cO05U8Zs_o.jpg',
      available: false,
      likes: 6
    },
    {
      title: 'Cosy cabin',
      imgUrl: 'https://images2.imgbox.com/98/8f/DVdCzskx_o.jpg',
      available: true,
      likes: 86
    }
  ]

  await Venue.bulkCreate(venues)
  console.log('Database seeded')
}

seed()
