// API i use here is Football-API

import axios from 'axios'

/* returns promise with the data based on the given api
also logs the given log value or no console logging if second params not passed
pass logresult to log the result
*/
export const fetchFootballAPI = async (apilink, logData = '') => {
  try {
    const res1 = await axios.get(apilink)
    const res2 = await res1.data
    if (logData !== '' && logData !== 'logresult') console.log(logData)
    if (logData === 'logresult') await console.log(res2)
    return res2
  } catch (err) {
    console.error(err)
  }
}
