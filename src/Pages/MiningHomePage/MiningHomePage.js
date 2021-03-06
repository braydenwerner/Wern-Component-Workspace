import React, { useState, useEffect } from 'react'
import { Slider, MiningStatSidebar } from '../../Components/exports'
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
      <MiningStatSidebar minerData={minerData} />
      <Slider />
    </>
  )
}
