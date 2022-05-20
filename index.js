function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    },
    {
      text: 'eat dinner',
      isCompleted: false,
    }           
  ])

  const addTodo = value => {
      const newTodos = [...todos, {text: value, isComplete: false}];
      setTodos(newTodos);
  }
  const removeTodo = e => {
    const index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }
  return(
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, i) => <div className='todo' key={i} id={i} onClick={removeTodo}><img src="deleteIcon.png" /> {todo.text} </div>)}
          <UseForm addTodo={addTodo} />
        </div>
      </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
