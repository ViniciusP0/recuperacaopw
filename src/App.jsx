import Button from "./Button";
import Plano from "./Plano";
import "./App.css"
function App() {
  const planos = [
    {
      title : "Combo Big King",
      qnt_users : "1 user",
      serve: "Serve 1 pessoa",
      price : "Free",

    },
    {
      title : "Combo Cheddar Duplo",
      qnt_users : "5 users",
      serve: "Serve 1 pessoa",
      price : " $ 19.99",

    },
    {
      title : "Combo Cheeseburguer Duplo com Bacon",
      qnt_users : "Unlimited users",
      serve: "Serve 1 pessoa",
      price : "$ 129.99",
    },
     {
      title : "Combo Mega Stacker 2.0",
      qnt_users : "5 users",
      serve: "Serve 1 pessoa",
      price : " $ 19.99",

    }
  ];
  return(
    <div className="cardPai">
      {planos.map( (plano) =>{
          return <Plano titulo={plano.title}
          usuarios={plano.qnt_users}
          qnt_projetcs={plano.serve}
          preco={plano.price} />
          

      })}
    </div>
  );
}

export default App;
