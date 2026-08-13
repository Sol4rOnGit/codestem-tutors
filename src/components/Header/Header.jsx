import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="/images/logo/logo.png" alt="CodeStem Tutors logo" className={styles.logo} />
      <h1 className={styles.branding}>CodeStem Tutors</h1>
    </header>
  )
}
