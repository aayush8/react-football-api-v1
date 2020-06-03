import React from 'react'
import { Link } from 'react-router-dom'

export default ({ standings, name }) => {
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
      <div className='d-flex '>
        <div className='text-center mr-4'>
          <Link to='/'>
            <img
              src='../assets/home.png'
              alt='Home'
              className='img-fluid leaguelogos homelogo mt-2'
            />
          </Link>
        </div>
        <h1 className='display-4 my-4'>{`${name[0].region} ${name[0].name}`}</h1>
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
        </div>
      </div>
    </div>
  )
}
