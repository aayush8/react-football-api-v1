import React from 'react'
import { Link } from 'react-router-dom'

export default ({ search, allComps }) => {
  if (search === '') return null
  else
    return (
      <div>
        <h1 className='display-4'>Result</h1>
        <div className='row mx-3'>
          {getSearchedLeague(allComps, search).map((value) => (
            <div
              key={value.id}
              className='col-md-6 col-lg-4 result-league-name'>
              <Link to={`/league/${value.id}`}>
                <p className='lead'>
                  <img
                    src={`thumbnails/${value.id}_tn.jpg`}
                    alt={value.region + ' ' + value.name}
                    onError={(val) =>
                      (val.target.src = 'thumbnails/default1_tn.jpg')
                    }
                  />
                  <span className='ml-3'>
                    <strong>{value.region + ' ' + value.name}</strong>
                  </span>
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
}

const getSearchedLeague = (array, search) => {
  return array.filter((comp) =>
    comp.region
      .concat(' ' + comp.name)
      .toLowerCase()
      .includes(search)
  )
}
