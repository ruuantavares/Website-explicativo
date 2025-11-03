function App() {
  const [contador, setContador] = React.useState(0);
  const [cor, setCor] = React.useState("#0077b6");

  const [tarefas, setTarefas] = React.useState([]);
  const [novaTarefa, setNovaTarefa] = React.useState("");

  const aumentar = () => {
    setContador(contador + 1);
    setCor("#0077b6"); // azul
  };

  const diminuir = () => {
    if (contador > 0) {
      setContador(contador - 1);
      setCor("#f44336");
    }
  };

  const resetar = () => {
    setContador(0);
    setCor("#0077b6");
  };

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== "") {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa("");
    }
  };

  const removerTarefa = (index) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  };
  return (
    <div className="secao contador-container">
      <h2>O que é React?</h2>
      <p>
        React é uma biblioteca JavaScript para criar interfaces interativas e
        componentes reutilizáveis, com react tudo fica mais pratico.
      </p>
      <p>
        Vamos refazer o contador e adicionar uma lista de tarefas, feitos com
        react.
      </p>
      <hr />
      <h2>Contador React</h2>
      <p className="contador-valor" style={{ color: cor }}>
        Valor do contador: {contador}
      </p>

      <button className="btn" onClick={aumentar}>
        Aumentar
      </button>
      <button className="btn" onClick={diminuir}>
        Diminuir
      </button>
      <button className="btn" onClick={resetar}>
        Resetar
      </button>

      <hr />

      <h2>Lista de Tarefas</h2>
      <input
        type="text"
        placeholder="Nova tarefa"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />
      <button className="btn" onClick={adicionarTarefa}>
        Adicionar
      </button>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa}{" "}
            <button className="btn" onClick={() => removerTarefa(index)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Renderiza o componente App dentro do div#root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
