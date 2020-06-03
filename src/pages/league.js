import React, { useEffect, useState } from 'react'
import Leaguehomepage from '../components/leaguehomepage'
import { fetchFootballAPI } from '../api/footballapi'

export default (props) => {
  const [leagueTable, setleagueTable] = useState([])
  const [leagueName, setleagueName] = useState([
    { name: 'Loading ...', region: '' },
  ])

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchFootballAPI(
      `https://data.football-api.com/v3/competitions/${props.match.params.id}?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b`
    ).then((value) => setleagueName(value))
    fetchFootballAPI(
      `https://data.football-api.com/v3/standings/${props.match.params.id}?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b`
    ).then((value) => setleagueTable(value))
  }, [])

  return <Leaguehomepage standings={leagueTable} name={leagueName} />
}
