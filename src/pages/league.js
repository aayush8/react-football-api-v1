import React, { useEffect, useState } from 'react'
import Leaguehomepage from '../components/leaguehomepage'
import axios from 'axios'

export default (props) => {
  const [leagueTable, setleagueTable] = useState([])
  const [leagueName, setleagueName] = useState([
    { name: 'Loading ...', region: '' },
  ])

  const fetchLeagueName = async () => {
    try {
      const res1 = await axios.get(
        `https://data.football-api.com/v3/competitions/${props.match.params.id}?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b`
      )
      const res2 = await res1.data
      console.log('API was called for league standings ...')
      setleagueName(res2)
    } catch (err) {
      console.error(err)
    }
  }

  const fetchLeagueStandings = async () => {
    try {
      const res1 = await axios.get(
        `https://data.football-api.com/v3/standings/${props.match.params.id}?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b`
      )
      const res2 = await res1.data
      console.log('API was called for league standings ...')
      setleagueTable(res2)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchLeagueName()
    fetchLeagueStandings()
  }, [])

  return <Leaguehomepage standings={leagueTable} name={leagueName} />
}
