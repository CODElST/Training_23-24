import * as React from 'react'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.settings}></div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
