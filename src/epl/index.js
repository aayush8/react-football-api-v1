import React, { useEffect, useState } from 'react'
import Leaguehomepage from '../components/leaguehomepage'
import axios from 'axios'

export default function Epl() {
  const [eplTable, setEplTable] = useState([])

  const fetchEplStandings = async () => {
    try {
      const res1 = await axios.get(
        'https://data.football-api.com/v3/standings/1204?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b'
      )
      const res2 = await res1.data
      console.log('API was called for premire league ...')
      setEplTable(res2)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchEplStandings()
  }, [])

  return (
    <div>
      {/* <h1 className='mt-4 pl-5'>English Premire League </h1> */}
      <Leaguehomepage exception='/epl' standings={eplTable} />
    </div>
  )
}
