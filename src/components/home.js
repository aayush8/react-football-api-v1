import React from 'react'
import { Link } from 'react-router-dom'

const leagues = [
  { link: '/epl', src: 'assets/epl.png' },
  { link: '/laliga', src: 'assets/laliga.png' },
  { link: '/bundesliga', src: 'assets/bundesliga.png' },
  { link: '/ligue1', src: 'assets/french.png' },
  { link: '/seriea', src: 'assets/serieap1.png' },
  { link: '/brazila', src: 'assets/brazil.png' },
]

export default () => {
  return (
    <div className='container-fluid'>
      <div className='alert alert-info m-5 d-none d-md-block' role='alert'>
        <ul id='bigtext'>
          <li>Note that the project depends on football-api data to work</li>
          <li>Free version of football-api is used in this project</li>
          <li>
            Free mode has limit of api requests per day of 1000 so if the limit
            is reached it will not work for a day
          </li>
          <li>
            Get code for this project{' '}
            <a href='https://github.com/aayush8/react-football-api-v1'>here</a>
          </li>
        </ul>
      </div>
      <div className='row'>
        {leagues.map((league) => (
          <div className='col-xl-2 col-lg-3 col-sm-4 col-6 my-3'>
            <Link to={league.link}>
              <img
                src={league.src}
                alt=''
                className='img-thumbnail leaguelogos'
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
