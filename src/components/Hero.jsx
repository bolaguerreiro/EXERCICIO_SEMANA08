import "../components/Hero.css";

function Hero() {
  return (
    <div className="css-12cnpfr">
      <h1 className="css-16bsvcn">
        Bebida rápida, gelada e no precinho? O Zé entrega tudo.
      </h1>
      <div className="css-1adoodw">
        <input
          type="text"
          placeholder="Inserir endereço para ver preço"
          className="css-1ukbpq9"
          value=""
        ></input>
      </div>
    </div>
  );
}

export default Hero;
