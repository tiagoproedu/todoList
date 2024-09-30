import { useEffect, useRef, useState } from "react";

function App() {

  /*const [todo, setTodo] = useState([]);
  const todoRef = useRef(null);

  function addTodo() {
    const add = [...todo, todoRef.current.value];
    setTodo(add);
  }
  function todoList(to, i) {
    return (<div key={i}><input type="checkbox" id={to} /><label for={to}>{to}</label></div>)
  }*/

  const [todo, setTodo] = useState([]);
  const todoRef = useRef(null);
  const [check, setCheck] = useState(false);
  const handleCheckboxChange = () =>{
    setCheck(!check);
  }
  

  function addTodo() {
    const newTodo = todoRef.current.value;
    setTodo([...todo, newTodo]);

    fetch('http://localhost:8080/todo', {
      method:'POST',
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
    .then(data => setTodo(data));
  }, []);

  function todoList(task, index){
    return (<div key={index}><input type="checkbox" id={task} checked={check} onChange={handleCheckboxChange}/><label className={check ? 'sublinhado' : ''} for={task}>{task}</label></div>);
  }
  
  return (
    <>
      <h1>TO-DO LIST</h1>

      <div className="toDo">
        <input type="text" ref={todoRef} />
        <button onClick={addTodo}>Adicionar</button>
        <fieldset>
          <legend>Tarefas:</legend>
          <ul>
            {todo.map(todoList)}
          </ul>
        </fieldset>
      </div>
    </>
  );
}

export default App;