import "./Header.css"
import Header from "./Header";
import React from "react";
import Plano from "./Plano";
import "./App.css"
function App() {
  const planos = [
    {
      link : "big-king.webp",
      title : "Combo Big King",
      info : "Um hambúrguer com duas carnes bovinas grelhadas de 57g, pão com gergelim e queijo...",
      serve: "Serve 1 pessoa",
      price : "R$41,90",

    },
    {
      link : "cheddar-duplo.webp",
      title : "Combo Cheddar Duplo",
      info : "Um hambúrguer com duas carnes bovinas grelhadas de 57g, Pão preto com gergelim, queijo...",
      serve: "Serve 1 pessoa",
      price : "R$ 41.90",

    },
    {
      link : "cheeseburger-duplo.webp",
      title : "Combo Cheeseburguer Duplo com Bacon",
      info : "Um hambúrguer com duas carnes bovinas grelhadas de 57g, pão com gergelim e queijo...",
      serve: "Serve 1 pessoa",
      price : "R$ 39.90",
    },
     {
      link : "mega-stacker.webp",
      title : "Combo Mega Stacker 2.0",
      info : "Um hambúrguer com duas carnes bovinas grelhadas de 113g, pão com gergelim e queijo...",
      serve: "Serve 1 pessoa",
      price : "R$ 51.90",

    }
  ];
  return(
    <div><Header/> 
    <div className="cardPai">
     
      {planos.map( (plano) =>{
          return <Plano imagem={plano.link} titulo={plano.title}
          infoBurguer={plano.info}
          servePessoas={plano.serve}
          preco={plano.price} />
          

      })}
    </div>
    </div>
  );
}

export default App;
