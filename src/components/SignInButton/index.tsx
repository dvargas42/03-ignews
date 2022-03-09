import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss'

export function SignInButton() {
  const isUserLoggedIn = true
  return isUserLoggedIn ? (
    <button type="button" className={styles.buttonContainer}>
      <FaGithub color="#04D361" />
      <span>
        dvargas42
      </span>
      <FiX className={styles.closeIcon} color="#737380"/>
    </button>
  ):(
    <button type="button" className={styles.buttonContainer}>
      <FaGithub color="#eba417" />
      <span>
        Sign in with Github
      </span>
    </button>
  )
}