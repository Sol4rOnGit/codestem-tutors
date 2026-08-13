import styles from './Hero.module.css'

export default function Hero() {
  const scrollToSubjects = () => {
    document.getElementById('subjects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <h1 className={styles.intro}>
          Affordable tutoring for Computer Science, Maths, Science and English by selective grammar school students
        </h1>
        <button className={styles.ctaBtn} onClick={scrollToSubjects}>
          Try us out for just <strong>£7/hour</strong> for the first two weeks!
        </button>
        <button className={styles.scrollDown} onClick={scrollToSubjects} aria-label="Scroll to subjects">
          <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="3" x2="12" y2="21" />
            <polyline points="9 18 12 21 15 18" />
          </svg>
        </button>
      </div>
    </section>
  )
}
