import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <title>It's me João Vítor</title>

      <main className={styles.main}>
        <h1 className={styles.title}>It's me João Vítor!</h1>

        <p className={styles.description}>Let's get this off the paper!</p>

        <div className={styles.grid}>
          <a
            href="https://github.com/jvvppereira"
            target="_blank"
            className={styles.card}
          >
            <h3>GitHub &rarr;</h3>
            <p>Where I expand and record my knowleadges</p>
          </a>

          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-v%C3%ADtor-vieira-paes-pereira-68073171"
            target="_blank"
            className={styles.card}
          >
            <h3>LinkedIn &rarr;</h3>
            <p>Where have more details about my profissional experience</p>
          </a>

          <a
            href="https://github.com/jvvppereira"
            target="_blank"
            className={styles.card}
          >
            <h3>Technologies &rarr;</h3>
            <p>Technologies that I have worked</p>
          </a>
        </div>
      </main>
    </div>
  );
}
