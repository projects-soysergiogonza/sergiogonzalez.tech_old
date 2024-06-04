import styles from './MenuButton.module.css'
import { useState } from 'react'

interface MenuButtonProps {
  setIsOpen: (value: (prev: any) => boolean) => void
}

export const MenuButton = ({ setIsOpen }: MenuButtonProps) => {
  const [activateMenu, setActivateMenu] = useState(false)

  const handleClick = () => {
    setActivateMenu((prev) => !prev)
    setIsOpen((prev) => !prev)
  }

  return (
    <button className={styles.btn} onClick={handleClick}>
      <span className={`${styles.icon} ${activateMenu && styles.inactiveMenu}`}>
        <svg viewBox="0 0 175 80" width="40" height="40">
          <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
          <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
          <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
        </svg>
      </span>
      <span
        className={activateMenu ? styles.menuActivate : styles.inactiveMenu}
      >
        MENU
      </span>
    </button>
  )
}
