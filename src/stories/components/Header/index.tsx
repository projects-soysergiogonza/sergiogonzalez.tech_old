'use client'
import React, { useState } from 'react'
import './Header.module.css'
import styles from './Header.module.css'
import { MenuButton } from '../MenuButton'
import Image from 'next/image'
import Logo from '@assets/images/logo.svg'
import { pages } from '@data/routes'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={styles.header}>
      <Image src={Logo} alt="logo" className={styles.Logo} />
      <MenuButton setIsOpen={setIsOpen} />
      {isOpen && (
        <div className={styles.input}>
          {
            pages.map((page, index) => (
<button className={styles.value}>
            <svg
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path
                d="m1.5 13v1a.5.5 0 0 0 .3379.4731 18.9718 18.9718 0 0 0 6.1621 1.0269 18.9629 18.9629 0 0 0 6.1621-1.0269.5.5 0 0 0 .3379-.4731v-1a6.5083 6.5083 0 0 0 -4.461-6.1676 3.5 3.5 0 1 0 -4.078 0 6.5083 6.5083 0 0 0 -4.461 6.1676zm4-9a2.5 2.5 0 1 1 2.5 2.5 2.5026 2.5026 0 0 1 -2.5-2.5zm2.5 3.5a5.5066 5.5066 0 0 1 5.5 5.5v.6392a18.08 18.08 0 0 1 -11 0v-.6392a5.5066 5.5066 0 0 1 5.5-5.5z"
                fill="#7D8590"
              ></path>
            </svg>
  {page.name}
          </button>
            ))
          }
        </div>
      )}
    </header>
  )
}
