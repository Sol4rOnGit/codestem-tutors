import styles from './Bookings.module.css'

const bookings = [
  {
    id: 'mse',
    title: 'Maths, Science, English (MSE)',
    desc: "Click the link below to fill in your details. Please include your phone number and whether you're doing GCSE or pre-GCSE. Thank you!",
    mailto:
      'mailto:codestemtutors@outlook.com?subject=MSE%20Enquiry&body=I%20wish%20to%20sign%20up%20for%20a%20maths,%20science%20and%20english%20tutoring%20session%20and%20i%20confirm%20i%20am/my%20child%20is%20year%208%20or%20younger%20...',
  },
  {
    id: 'physics',
    title: 'Physics',
    desc: "Click the link below to fill in your details. Please include your phone number and whether you're doing GCSE or pre-GCSE. See at the bottom for combined offer if needed. Thank you!",
    mailto: 'mailto:codestemtutors@outlook.com?subject=Physics%20Enquiry&body=I%20wish%20to%20sign%20up%20for%20a%20physics%20tutoring%20session%20...',
  },
  {
    id: 'computer-science',
    title: 'Computer Science',
    desc: "Click the link below to fill in your details. Please include your phone number and specify which programme you're choosing (GCSE, pre-GCSE, programming). See below for combined offer if needed. Thank you!",
    mailto:
      'mailto:codestemtutors@outlook.com?subject=Comp%20Sci%20Enquiry&body=I%20wish%20to%20sign%20up%20for%20a%20computer%20science%20tutoring%20session%20...',
  },
]

export default function Bookings() {
  return (
    <section className={styles.bookings}>
      <h1>Bookings</h1>
      <p className={styles.reminder}>Don't forget to mention if you're eligible for the £7/hr discounted price!</p>

      <div className={styles.grid}>
        {bookings.map((b) => (
          <div className={styles.card} id={b.id} key={b.id}>
            <h2>{b.title}</h2>
            <p>{b.desc}</p>
            <a href={b.mailto}>Email</a>
          </div>
        ))}

        <div className={styles.card}>
          <h2>GCSE Computer Science and Physics Combined Offer</h2>
          <p>
            Get tutoring in both Physics and Computer Science for just £24/hour (normally £30), delivered by two
            expert tutors. Click the link below to fill in your details, including your phone number. Thank you!
          </p>
          <p>
            <strong>This trial is £14/hr due to the nature of two subjects.</strong>
          </p>
          <a href="mailto:codestemtutors@outlook.com?subject=Combined%20Offer%20Enquiry&body=I%20wish%20to%20sign%20up%20for%20a%20computer%20science%20tutoring%20session%20and%20physics%20session%20for%20a%20discounted%20price%20of%20£24%20...">
            Email
          </a>
        </div>
      </div>

      <p className={styles.note}>If you know the tutors personally, email them first. They may be able to offer more personalised support.</p>
    </section>
  )
}