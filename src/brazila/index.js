import React, { useEffect, useState } from 'react'
import Leaguehomepage from '../components/leaguehomepage'
import axios from 'axios'

export default () => {
  const [brazilaTable, setBrazilaTable] = useState([])

  const fetchStandings = async () => {
    try {
      const res1 = await axios.get(
        'https://data.football-api.com/v3/standings/1141?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b'
      )
      const res2 = await res1.data
      console.log('API was called for brazil league 1 ...')
      setBrazilaTable(res2)
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
      <Leaguehomepage exception='/brazila' standings={brazilaTable} />
    </div>
  )
}
