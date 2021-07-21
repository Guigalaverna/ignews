import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  return (  
    <button
      type='button'
      className={styles.signInButton}
    >
      { isAuthenticated ? (
        <>
          <FaGithub color='#04D361'/>
          Guilherme Galaverna
          <FiX color='#737380' className={styles.closeIcon}/>
        </>
      ) : (
        <>
          <FaGithub color='#EBA417'/>
          Sign in with Github
        </>
      ) }
    </button>
  )
}