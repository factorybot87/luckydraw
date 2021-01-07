import React, { PropsWithChildren } from 'react'
import styles from './Layout.scss'
export default function Layout({ children }: PropsWithChildren<Record<string, any>>) {
  return <main className={styles.default}>{children}</main>
}
