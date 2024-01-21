import { useRef, useState } from "react";

function App() {

  const [todo, setTodo] = useState([]);
  const todoRef = useRef(null);

  function addTodo() {
    const add = [...todo, todoRef.current.value];
    setTodo(add);
  }
  function todoList(to, i) {
    return(<div key={i}><input type="checkbox" id={to}/><label for={to}>{to}</label></div>)
  }

  return(
    <>
    <h1>TO-DO LIST</h1>

    <div className="toDo">
      <input type="text" ref={todoRef}/>
      <button onClick={addTodo}>Adicionar</button>
      <fieldset>
        <legend>Tarefas:</legend>
        {todo.map(todoList)}
      </fieldset>
    </div>
    </>
  );
}

export default App;