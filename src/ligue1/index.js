import React, { useEffect, useState } from 'react'
import Leaguehomepage from '../components/leaguehomepage'
import axios from 'axios'

export default () => {
  const [ligue1Table, setligue1Table] = useState([])

  const fetchStandings = async () => {
    try {
      const res1 = await axios.get(
        'https://data.football-api.com/v3/standings/1221?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b'
      )
      const res2 = await res1.data
      console.log('API was called for France  league 1 ...')
      setligue1Table(res2)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchStandings()
  }, [])

  return (
    <div>
      <Leaguehomepage exception='/ligue1' standings={ligue1Table} />
    </div>
  )
}
