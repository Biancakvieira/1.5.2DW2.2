import "./styles.css";
import { Titulo } from "./Titulo/Titulo";
import { Botao } from "./Botao/Botao";
import { useState } from "react";

const tarefas = [
  {
    descricao: "Ler Livro ALGORITMOS E LOGICA DE PROGRAMACÃO",
    status: "pendente"
  },
  {
    descricao: "Ter renda constante",
    status: "pendente"
  },
  {
    descricao: "Ex-Marido",
    status: "excluida"
  },
  {
    descricao: "consertar chaminé",
    status: "pendente"
  },
  {
    descricao: "Apresentação cagada do curso",
    status: "concluida"
  }
];

/*const status = ["pendente", "concluida", "excluida"];
/*const pendente = ["curso de T.I.", "Divorcio"];
const concluida = ["Troca de pneus", "terceira venda"];
const exluida = ["Marcos"];*/

export default function App() {
  const [status, setStatus] = useState("pendente");

  return (
    <div className="App">
      <Titulo descricao="Minhas Tarefas" />
      {/* {/* <div className="botoes"> */}
      <Botao
        status="pendente"
        onClick={() => {
          setStatus("pendente");
        }}
      />
      <Botao
        status="concluida"
        onClick={() => {
          setStatus("concluida");
        }}
      />
      <Botao
        status="excluida"
        onClick={() => {
          setStatus("excluida");
        }}
      />
      {/* </div> */}
      {/* <Tarefas tarefas={[]} /> */}
      <ul>
        {tarefas
          .filter((tarefa) => tarefa.status === status)
          .map((tarefa) => (
            <li className={status}>{tarefa.descricao}</li>
          ))}
      </ul>
    </div>
  );
}
