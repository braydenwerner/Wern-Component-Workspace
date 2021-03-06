import React, { useState, useEffect } from 'react'
import { Slider, MiningStatDashboard } from '../../Components/exports'
import { getMinerData } from '../../api/ethermineApi'

export default function MiningHomePage() {
  const [minerData, setMinerData] = useState()

  useEffect(() => {
    getMinerData().then((data) => {
      setMinerData(data)
    })
  }, [])

  return (
    <>
      <MiningStatDashboard minerData={minerData} />
      <Slider />
    </>
  )
}
