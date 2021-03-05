import axios from 'axios'

export const getMinerData = async () => {
  const res = await axios(
    'https://api.ethermine.org/miner/53ce4cED03649deeB0588aD4b355d985888df95c/currentStats'
  )
  return res.data.data
}
