import App from "./App";
import "./Plano.css"
function Plano({imagem, titulo, infoBurguer, servePessoas, preco}){
    return(
        <div  className="plano-container">
            <img src={imagem} alt="" width={200} />
            <h3 className="plano-titulo">{titulo}</h3>
            <p className="plano-info">{infoBurguer}</p>
            <p className="plano-info">{servePessoas}</p>
            <h3 className="plano-preco">{preco}</h3>
        </div>
    );
}
export default Plano;