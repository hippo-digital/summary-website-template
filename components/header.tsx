/* eslint-disable prettier/prettier */
import { Session } from "next-auth"
import { signOut } from "next-auth/react"
import Link from "next/link"
import React from "react"
import Logo from "./logo"
import styles from "./header.module.scss"

export type HeaderProps = {
  session: Session | undefined
  tags: string[]
}

const Header = (props: HeaderProps) => {
  const { session, tags } = props
  if (session && session.user) {
    return (
      <header className={styles.mainHeader}>
        <Link href="/" className={styles.logo}>
          <Logo className={styles.logoImage} hasUnderline={true} />
          Hippo Summary Website
        </Link>
        <div className={styles.actions}>
          <a className={styles.signOut} onClick={() => signOut()}>
            Sign out
          </a>
        </div>
      </header>
    )
  }

  return null
}

export default Header
