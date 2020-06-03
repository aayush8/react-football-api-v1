import React, { useEffect, useState } from 'react'
import Leaguehomepage from '../components/leaguehomepage'
import { fetchFootballAPI } from '../api/footballapi'
import moment from 'moment'

export default (props) => {
  const [leagueTable, setleagueTable] = useState([])
  const [leagueName, setleagueName] = useState([
    { name: 'Loading ...', region: '' },
  ])
  const [upcomingFixtures, setupcomingFixtures] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchFootballAPI(
      `https://data.football-api.com/v3/competitions/${props.match.params.id}?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b`
    ).then((value) => setleagueName(value))
    fetchFootballAPI(
      `https://data.football-api.com/v3/standings/${props.match.params.id}?Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b`
    ).then((value) => setleagueTable(value))
    //fetching upcoming matches for next 10 days
    fetchFootballAPI(
      `https://data.football-api.com/v3/matches?comp_id=${
        props.match.params.id
      }&from_date=${moment().format('DD.MM.YYYY')}&to_date=${moment()
        .add(30, 'days')
        .format(
          'DD.MM.YYYY'
        )}&Authorization=cfnR6LWc4i4MDFLlPJrajoa465c4qjF594kpIy4b`,
      'logresult'
    ).then((value) => setupcomingFixtures(value))
  }, [])

  return (
    <Leaguehomepage
      standings={leagueTable}
      name={leagueName}
      upcomingFixtures={upcomingFixtures}
    />
  )
}
