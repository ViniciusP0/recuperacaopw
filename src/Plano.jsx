import App from "./App";
import Button from "./Button";
import "./Plano.css"
function Plano({titulo, serve, qnt_projetcs, preco}){
    return(
        <div  className="plano-container">
            <h1 className="plano-titulo">{titulo}</h1>
            <p className="plano-info">{serve}</p>
            <p className="plano-info">{qnt_projetcs}</p>
            <h2 className="plano-preco">{preco}</h2>
            <Button/>
        </div>
    );
}
export default Plano;