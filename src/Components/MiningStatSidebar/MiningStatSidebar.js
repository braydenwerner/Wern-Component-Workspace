import React, { useState, useEffect } from 'react'
import { Resizable, ResizableBox } from 'react-resizable'
import './MiningStatSidebar.scss'

export default function MiningStatSidebar({ minerData }) {
  const [showTextInResizableBox, setShowTextInResizableBox] = useState(true)

  useEffect(() => {
    console.log(minerData)
  }, [])

  const handleResize = (e) => {
    if (e.clientX < 10) setShowTextInResizableBox(false)
    else setShowTextInResizableBox(true)
  }

  return (
    <>
      <ResizableBox
        className="resizeable-box"
        width={200}
        height={window.innerHeight}
        minConstraints={[10, 100]}
        maxConstraints={[300, Infinity]}
        axis="x"
        resizeHandles={['e']}
        handleSize={[150, 150]}
        onResize={(e, data) => handleResize(e, data)}
      >
        {showTextInResizableBox && <span>Contents</span>}
      </ResizableBox>
    </>
  )
}
