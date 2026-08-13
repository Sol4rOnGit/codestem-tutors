import styles from './Subjects.module.css'

const cards = [
  {
    title: 'Computer Science',
    items: ['GCSE Computer Science - from £12/hr', 'Programming (GCSE+) - £15/hr (Worldwide)'],
    href: '#computer-science',
    cta: 'Book CS courses',
  },
  {
    title: 'Physics',
    items: ['GCSE Physics - £15/hr', 'Pre-GCSE Physics - £12/hr'],
    href: '#physics',
    cta: 'Book physics',
  },
  {
    title: 'Maths, Science and English',
    items: ['Year 8 and under for £14', 'Year 6 and under for £12.50'],
    href: '#mse',
    cta: 'Book MSE',
  },
]

export default function Subjects() {
  return (
    <section className={styles.subjects} id="subjects">
      <p className={styles.reminder}>Don't forget that you have a two week trial for just £7/hour</p>

      <div className={styles.cardWrapper}>
        {cards.map((card) => (
          <div className={styles.card} key={card.title}>
            <h2>{card.title}</h2>
            <ul>
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href={card.href}>{card.cta}</a>
          </div>
        ))}

        <div className={styles.card}>
          <h2>Custom Tutoring</h2>
          <p>We can do custom tutoring, e.g. maths and science only.</p>
          <p>
            Rates will be discussed, but <strong>typically</strong> £12+/hr
          </p>
          <a href="mailto:codestemtutors@outlook.com?subject=Custom%20Tutoring%20Enquiry&body=I%20wish%20to%20sign%20up%20for%20a%20custom%20tutoring%20session%20...">
            Email
          </a>
        </div>
      </div>

      <p>
        We include resources, lessons, pre-learning, and other work tailored to your child's needs — plus regular
        feedback to parents and children alike.
      </p>
      <p className={styles.priceWarning}>Prices are subject to change. We will provide at least two months' notice of any changes.</p>
    </section>
  )
}
