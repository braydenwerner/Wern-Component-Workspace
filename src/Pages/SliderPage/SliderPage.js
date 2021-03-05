import React, { useState, useEffect } from 'react'
import { Slider } from '../../Components/exports'
import { getMinerData } from '../../api/ethermineApi'

export default function SliderPage() {
  const [minerData, setMinerData] = useState()

  useEffect(() => {
    getMinerData().then((data) => {
      setMinerData(data)
    })
  }, [])

  return (
    <>
      <div>{minerData.time}</div>
      <Slider />
    </>
  )
}
