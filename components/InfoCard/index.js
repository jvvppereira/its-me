import style from "../../styles/InfoCard.module.css";

function InfoCard() {
  return (
    <div className={style.card}>
      <img className={style.avatar}></img>
      <h3>João Vítor</h3>
      <h3> Vieira Paes Pereira</h3>
      <p>Desenvolvedor e Analista</p>
      {/* <img>locale icon</img> */}
      <p>Blumenau, SC, Brasil </p>
      {/* <img>br flag</img> */}
    </div>
  );
}

export default InfoCard;
