import style from "../styles/Home.module.css";
import InfoCard from "../components/InfoCard";

export default function Home() {
  return (
    <div className={style.container}>
      <title>It's me João Vítor</title>

      <main className={style.main}>
        <InfoCard></InfoCard>

        <div className={style.card}>
          <div className={style.grid}>
            <a
              href="https://github.com/jvvppereira"
              target="_blank"
              className={style.card}
            >
              <h3>GitHub &rarr;</h3>
              <p>Where I expand and record my knowleadges</p>
            </a>

            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-v%C3%ADtor-vieira-paes-pereira-68073171"
              target="_blank"
              className={style.card}
            >
              <h3>LinkedIn &rarr;</h3>
              <p>More details about my professional experience</p>
            </a>

            <a
              href="https://github.com/jvvppereira"
              target="_blank"
              className={style.card}
            >
              <h3>Technologies &rarr;</h3>
              <p>Technologies that I have worked</p>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
