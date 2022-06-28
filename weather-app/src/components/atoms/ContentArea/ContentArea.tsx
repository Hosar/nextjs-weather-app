import React, { ReactNode } from 'react'
import styles from './ContentArea.module.scss';

export  function ContentArea({ bgColor, children }: { bgColor: string, children: ReactNode}) {
  return (
    <div className={styles.contentArea}>{children}</div>
  )
}
