import "./Botao.css";

export function Botao(props) {
  const condicoes = {
    pendente: {
      descricao: "Pendentes",
      cor: "verde"
    },
    concluida: {
      descricao: "Concluidas",
      cor: "azul"
    },
    excluida: {
      descricao: "Excluidas",
      cor: "vermelho"
    }
  };

  return (
    <button className={condicoes[props.status].cor} onClick={props.onClick}>
      {condicoes[props.status].descricao}
    </button>
  );
}
