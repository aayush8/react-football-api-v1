import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export default ({ standings, name, upcomingFixtures }) => {
  const [displayRelativeTime, setDisplayRelativeTime] = useState('default')

  if (standings === undefined)
    return (
      <div className='container'>
        <h1 className='display-4 my-4'>
          Sorry, but the API currently has no data for this competition .. check
          back again later ...
        </h1>
        <a className='display-4' href='/'>
          Back to HomePage
        </a>
      </div>
    )
  return (
    <div className='container-fluid px-4'>
      <div className='d-flex justify-content-between'>
        <div className='d-flex'>
          <div className='text-center mr-4'>
            <Link to='/'>
              <img
                src='../assets/home.png'
                alt='Home'
                className='img-fluid leaguelogos homelogo mt-2'
              />
            </Link>
          </div>
          <h1 className='display-4 my-4'>
            {name !== undefined
              ? `${name[0].region} ${name[0].name}`
              : 'Check back later ...'}
          </h1>
        </div>
        <div className='dropdown align-self-center mr-5'>
          <button
            className='btn btn-secondary dropdown-toggle'
            type='button'
            id='dropdownMenuButton'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'>
            Display Time
          </button>
          <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
            <button
              className='dropdown-item'
              onClick={() => setDisplayRelativeTime('default')}>
              Default
            </button>
            <button
              className='dropdown-item'
              onClick={() => setDisplayRelativeTime('relative')}>
              Relative
            </button>
            <button
              className='dropdown-item'
              onClick={() => setDisplayRelativeTime('calendar')}>
              Calendar
            </button>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='table-responsive col-lg-9'>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Team</th>
                <th scope='col'>PL</th>
                <th scope='col'>W</th>
                <th scope='col'>D</th>
                <th scope='col'>L</th>
                <th scope='col' className='d-none d-md-table-cell'>
                  +/-
                </th>
                <th scope='col'>GD</th>
                <th scope='col'>Pts</th>
                <th scope='col' className='d-none d-md-table-cell'>
                  Form
                </th>
              </tr>
            </thead>
            <tbody>
              {standings.map((team) => (
                <tr key={team.team_id}>
                  <td>{team.position}</td>
                  <td>{team.team_name}</td>
                  <td>{team.overall_gp}</td>
                  <td>{team.overall_w}</td>
                  <td>{team.overall_d}</td>
                  <td>{team.overall_l}</td>
                  <td className='d-none d-md-table-cell'>{`${team.overall_gs}-${team.overall_ga}`}</td>
                  <td>{team.gd}</td>
                  <td>{team.points}</td>
                  <td className='d-none d-md-table-cell'>
                    {team.recent_form === null
                      ? team.recent_form
                      : team.recent_form.split('').join(' ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='table-responsive col-lg-3 d-none d-lg-block'>
          <h1 className='display-4 text-center mb-3'> Upcoming Fixtures</h1>
          {upcomingFixtures !== undefined ? (
            upcomingFixtures.slice(0, 11).map((match) => (
              <div key={match.id}>
                <p className='lead text-center'>
                  {`${match.localteam_name} vs ${match.visitorteam_name}`}
                  <br />
                  {getDateAndTime(
                    displayRelativeTime,
                    `${match.formatted_date} ${match.time}`
                  )}
                </p>
              </div>
            ))
          ) : (
            <p className='lead text-danger'>
              No fixtures for upcoming 30 days ...
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

//format to pass dateandtime is 06.20.2020 18:30
const getDateAndTime = (timeorder, dateandtime) => {
  if (timeorder === 'relative') {
    //code to return relative time
    return moment(dateandtime, 'DD.MM.YYYY hh:mm').fromNow()
  } else if (timeorder === 'default') {
    //code to return calendar time
    return moment(dateandtime, 'DD.MM.YYYY hh:mm').format(
      'MMMM Do YYYY, hh:mm a'
    )
  }
  //for calendar time
  else {
    return moment(dateandtime, 'DD.MM.YYYY hh:mm').calendar()
  }
}
