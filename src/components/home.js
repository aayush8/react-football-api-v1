import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className='container-fluid'>
      <div class='alert alert-info m-5' role='alert'>
        <p>
          <ul id='bigtext'>
            <li>Note that the project depends on football-api data to work</li>
            <li>Free version of football-api is used in this project</li>
            <li>
              Free mode has limit of api requests per day of 1000 so if the
              limit is reached it will not work for a day
            </li>
            <li>
              Get code for this project{' '}
              <a href='https://github.com/aayush8/react-football-api-v1'>
                here
              </a>
            </li>
          </ul>
        </p>
      </div>
      <div className='row'>
        <div className='col-xl-2 col-lg-3 col-sm-4 col-xs-6 my-3'>
          <Link to='/epl'>
            <img
              src='assets/epl.png'
              alt=''
              className='img-thumbnail leaguelogos'
            />
          </Link>
        </div>
        <div className='col-xl-2 col-lg-3 col-sm-4 col-xs-6 my-3'>
          <Link to='/laliga'>
            <img
              src='assets/laliga.png'
              alt=''
              className='img-thumbnail leaguelogos'
            />
          </Link>
        </div>
        <div className='col-xl-2 col-lg-3 col-sm-4 col-xs-6 my-3'>
          <Link to='/seriea'>
            <img
              src='assets/serieap1.png'
              alt=''
              className='img-thumbnail leaguelogos'
            />
          </Link>
        </div>
        <div className='col-xl-2 col-lg-3 col-sm-4 col-xs-6 my-3'>
          <Link to='ligue1'>
            <img
              src='assets/french.png'
              alt=''
              className='img-thumbnail leaguelogos'
            />
          </Link>
        </div>
        <div className='col-xl-2 col-lg-3 col-sm-4 col-xs-6 my-3'>
          <Link to='/bundesliga'>
            <img
              src='assets/bundesliga.png'
              alt=''
              className='img-thumbnail leaguelogos'
            />
          </Link>
        </div>
        <div className='col-xl-2 col-lg-3 col-sm-4 col-xs-6 my-3'>
          <Link to='brazila'>
            <img
              src='assets/brazil.png'
              alt=''
              className='img-thumbnail leaguelogos'
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
