import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from "../styles/Portal.module.css"

export const Portal = (props) => {
    const { overlay } = props;
  const ref = useRef(null)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    ref.current = document.querySelector("#portal")
    setMounted(true)
  }, [])

  return (mounted && ref.current) ? createPortal(<div className={overlay ? styles.overlay : ''}>{props.children}</div>, ref.current) : null
}
