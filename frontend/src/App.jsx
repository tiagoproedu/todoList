import { useEffect, useRef, useState } from "react";

function App() {

  //CÓDIGO ANTIGO:

  /*const [todo, setTodo] = useState([]);
  const todoRef = useRef(null);

  function addTodo() {
    const add = [...todo, todoRef.current.value];
    setTodo(add);
  }
  function todoList(to, i) {
    return (<div key={i}><input type="checkbox" id={to} /><label for={to}>{to}</label></div>)
  }*/

  // Inicio da aplicação

  const [todo, setTodo] = useState([]); // Monitora o estado da task
  const todoRef = useRef(null); // Pega o valor que foi digitado na referência
  const [check, setCheck] = useState(false); // Monitora o estado da checkbox para ver se ela foi checkada ou não
  const handleCheckboxChange = () =>{
    setCheck(!check); // Muda o estado da checkbox
  }
  

  function addTodo() { // Adiciona uma tarefa na lista
    const newTodo = todoRef.current.value;
    setTodo([...todo, newTodo]);

    fetch('http://localhost:8080/todo', { // Manda uma requisição ao servidor
      method:'POST', // Método para mandar tarefa para o backend
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tarefa: newTodo })
    })
    .then(response => {
      if(!response.ok){
        throw new Error('Erro ao adicionar tarefa');
      }
      return response.json();
    })
    .then(data => {
      console.log('Tarefa adicionada com sucesso: ', data);
    })
    .catch(error => {
      console.error('Erro: ', error);
    })
  }

  useEffect(() => {
    fetch('http://localhost:8080/todo')
    .then(response => response.json())
    .then(data => setTodo(data)); // Traz a lista de tarefas
  }, []);

  function todoList(task, index){ // Cria os itens um por um da lista de tarefas
    return (<div key={index}><input type="checkbox" id={task} checked={check} onChange={handleCheckboxChange}/><label className={check ? 'sublinhado' : ''} for={task}>{task}</label></div>);
  }
  
  return (
    <>
      <h1>TO-DO LIST</h1>

      <div className="toDo">
        <input type="text" ref={todoRef} /> {/*Manda a referência para o useRef*/}
        <button onClick={addTodo}>Adicionar</button> {/*Quando clica no botão manda a tarefa para a lista*/} 
        <fieldset>
          <legend>Tarefas:</legend>
          <ul>
            {todo.map(todoList)}{/*Percorre o array todo encaixando cada elemento na função todoList*/}
          </ul>
        </fieldset>
      </div>
    </>
  );
}

export default App;