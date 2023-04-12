import { Portal } from '@/components/Portal';
import { useState } from 'react'

export default function PortalPage({ Component, pageProps }) {
  const [overlay, setOverlay] = useState(false)

  const handleClick = () => {
    setOverlay(!overlay)
  }
  
  return (
    <div>
        <h1>Portal</h1>
        <button onClick={handleClick}>Turn Overlay {overlay ? 'Off' : 'On'}</button>
        <Portal overlay={overlay}>
          <p>Next Js Portal by LearnBestCoding</p>
        </Portal>
    </div>
  )
}
