import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>About us</h2>
        <p>We're two Year 12 high-achieving students from a selective grammar school offering 1-to-1 online tutoring.</p>
        <p>One of us specialises in computer science, with multiple games, websites, and other coding projects out and running with almost a decade of coding experience, aspiring to study at Imperial College London, get a job at Microsoft, and eventually start his own business in computer science. He'll give your child the knowledge and skills needed to get a grade 9 in computer science, move to an A* and ultimately pursue a top tech job.</p>
        <p>The latter specialises in design and mechanics, with hands-on experience building projects and tackling real-world problems. He's aiming to study Mechanical Engineering at Imperial College London, with the goal of working in automotive design. Strong in Maths and Physics, he brings clear, structured explanations to every session, helping students aim for top grades and build a strong foundation in STEM subjects.</p>
        <p>We're open to applications from other high-achieving students who are interested in joining our tutoring team — email us to find out more.</p>
      </div>
    </section>
  )
}
