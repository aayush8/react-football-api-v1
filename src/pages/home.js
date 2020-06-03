import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchFootballAPI } from '../api/footballapi'
import Searchresult from '../components/searchresult'
// import Test from '../components/test'

const leagues = [
  { id: '1204', name: 'epl' },
  { id: '1399', name: 'laliga' },
  { id: '1229', name: 'bundesliga' },
  { id: '1221', name: 'french ligue1' },
  { id: '1269', name: 'serie a' },
  { id: '1141', name: 'brazil a' },
  { id: '1440', name: 'mls' },
  { id: '1081', name: 'argentina superliga' },
  { id: '1271', name: 'japan j league 1' },
  { id: '1282', name: 'south korea league1' },
  { id: '1322', name: 'holland erdesive' },
  { id: '1352', name: 'portugal liga' },
]

export default () => {
  //this is for debug component mode
  // return <Test />

  const [allComps, setallComps] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleChange = (value) => {
    setInputValue(value)
  }

  useEffect(() => {
    fetchFootballAPI(
      'https://data.football-api.com/v3/competitions?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b'
    ).then((value) => setallComps(value))
  }, [])

  return (
    <div className='container-fluid'>
      <div className='alert alert-info m-5 d-none d-lg-block' role='alert'>
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
      <div className='input-group my-3 league-search'>
        <div className='input-group-prepend'>
          <button className='btn btn-outline-secondary' type='button'>
            Search for leagues
          </button>
        </div>
        <input
          value={inputValue}
          onChange={($event) => handleChange($event.target.value)}
          type='text'
          className='form-control'
          placeholder='eg. premier league'
          aria-label=''
          aria-describedby='basic-addon1'
        />
      </div>
      <Searchresult search={inputValue} allComps={allComps} />
      <div>
        <h1 className='display-4'>Top Domestic Leagues</h1>
      </div>
      <div className='row'>
        {leagues.map((league) => (
          <div
            className='col-xl-2 col-lg-3 col-sm-4 col-6 my-3'
            key={league.id}>
            <Link to={`/league/${league.id}`}>
              <img
                src={`assets/${league.id}.png`}
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
