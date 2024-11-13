import { useEffect, useRef, useState } from "react";
import "./Home.css";

function Home() {

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
  const [check, setCheck] = useState({}); // Monitora o estado da checkbox para ver se ela foi checkada ou não
  const [editMode, setEditMode] = useState(null);
  const [editValue, setEditValue] = useState("");

  function addTodo() { // Adiciona uma tarefa na lista
    const newTodo = todoRef.current.value;
    setTodo([...todo, newTodo]);

    fetch('http://localhost:8080/todo', { // Manda uma requisição para o backend
      method: 'POST', // Método para mandar tarefa para o backend
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tarefa: newTodo })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao adicionar tarefa');
        }
        return response.json();
      })
      .then(data => {
        todoRef.current.value = '';
        console.log('Tarefa adicionada com sucesso: ', data);
      })
      .catch(error => {
        console.error('Erro: ', error);
      })
  }

  function removeTodo(task) { //Remove uma tarefa da lista
    fetch('http://localhost:8080/todo', { //Manda um requisição para o backend
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tarefa: task }) //Body que será enviado para o backend
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Erro ao deletar tarefa');
        }
        setTodo(prevTodo => prevTodo.filter(t => t !== task)); //Atualiza o estado local removendo a tarefa
      })
      .catch(error => {
        console.error('Erro: ', error);
      });
  }

  function startEditing(task) {
    setEditMode(task);
    setEditValue(task);
  }

  function cancelEditing() {
    setEditMode(null);
    setEditValue("");
  }

  function saveEdit(task) {
    fetch('http://localhost:8080/todo', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ oldTarefa: task, newTarefa: editValue })
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Erro ao editar tarefa');
        }
        setTodo(prevTodo => prevTodo.map(t => t === task ? editValue : t));
        setEditMode(null);
        setEditValue("");
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

  function handleCheckboxChange(task) { // Muda o estado da checkbox
    setCheck(prevCheck => ({
      ...prevCheck, //espalhando todas as propriedades do objeto prevCheck
      [task]: !prevCheck[task] //está adicionando ou atualizando a propriedade com chave index, invertendo o seu valor(!)
    }));
  }

  function todoList(task) { // Cria os itens um por um da lista de tarefas
    return (
      <div key={task} className="task">
        {editMode === task ? (
          <div className="editing">
            <input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
            <button onClick={() => saveEdit(task)}>Salvar</button>
            <button onClick={cancelEditing}>Cancelar</button>
          </div>
        ) : (
          <div className="tasks">
            <div>
              <input type="checkbox" id={`checkbox-${task}`} checked={check[task] || false} onChange={() => handleCheckboxChange(task)} />
              <label className={check[task] ? 'sublinhado' : ''} for={`checkbox-${task}`}> {/*Adiciona o sublinhado nas tarefas concluidas*/}
                {task}
              </label>
            </div>
            <div>
              <a onClick={() => startEditing(task)}><img src="icon-lapis.png" alt="lapis" /></a>
              <a onClick={() => removeTodo(task)}><img src="icon-lixeira.svg" alt="lixeira" /></a> {/* Icone usado para remover o item da lista quando é clicado */}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <div id="home">
        <h1>TO-DO LIST</h1>

        <div className="toDo">
          <input type="text" ref={todoRef} /> {/*Manda a referência para o useRef*/}
          <button onClick={addTodo} id="addButton">ADICIONAR</button> {/*Quando clica no botão manda a tarefa para a lista*/}
          <fieldset>
            <legend>Tarefas:</legend>
            <ul>
              {todo.map(todoList)}{/*Percorre o array todo encaixando cada elemento na função todoList*/}
            </ul>
          </fieldset>
        </div>
      </div>
    </>
  );
}

export default Home;