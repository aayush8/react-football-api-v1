import React from 'react'
import Sideleagues from './sideleagues'

export default ({ standings, name }) => {
  return (
    <div className='container'>
      <h1 className='display-4'>{`${name[0].region} ${name[0].name}`}</h1>
      <div className='row'>
        <div className='table-responsive'>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Team</th>
                <th scope='col'>PL</th>
                <th scope='col'>W</th>
                <th scope='col'>D</th>
                <th scope='col'>L</th>
                <th scope='col'>+/-</th>
                <th scope='col'>GD</th>
                <th scope='col'>Pts</th>
                <th scope='col'>Form</th>
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
                  <td>{`${team.overall_gs}-${team.overall_ga}`}</td>
                  <td>{team.gd}</td>
                  <td>{team.points}</td>
                  <td>
                    {team.recent_form === null
                      ? team.recent_form
                      : team.recent_form.split('').join(' ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
