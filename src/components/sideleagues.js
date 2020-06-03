import React from 'react'
import { Link } from 'react-router-dom'

const leagues = [
  { link: '/epl', src: 'assets/epl.png' },
  { link: '/laliga', src: 'assets/laliga.png' },
  { link: '/bundesliga', src: 'assets/bundesliga.png' },
  { link: '/ligue1', src: 'assets/french.png' },
  { link: '/seriea', src: 'assets/serieap1.png' },
  { link: '/brazila', src: 'assets/brazil.png' },
  { link: '/', src: 'assets/home.png' },
]

export default function sideleagues({ exception }) {
  return (
    <div className='justify-content-center'>
      {leagues.map((league) => (
        <div
          className={league.link === exception ? 'd-none' : 'mb-3'}
          key={league.link}>
          {console.log('I am in ' + league.link)}
          <Link to={league.link}>
            <img
              src={league.src}
              alt={league.link}
              className='img-thumbnail leaguelogos'
            />
            {console.log(league.src)}
          </Link>
        </div>
      ))}
    </div>
  )
}
