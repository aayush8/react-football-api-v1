import React from 'react'
import Sideleagues from './sideleagues'

const FillTable = ({ standings }) => {
  if (standings === undefined) {
    console.log('Standings is undefined ...')
    return <tbody></tbody>
  }
  return (
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
  )
}

const Table = ({ standings }) => {
  return (
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
          <th scope='col' className='d-none d-md-table-cell'>
            Form
          </th>
        </tr>
      </thead>
      <FillTable standings={standings} />
    </table>
  )
}

export default ({ exception, standings }) => {
  return (
    <div className='container-fluid my-5'>
      <div className='row'>
        <div className='col-xl-10'>
          <Table standings={standings} />
        </div>
        <div className='col-xl-2 d-none d-xl-flex'>
          <Sideleagues exception={exception} />
        </div>
      </div>
    </div>
  )
}
