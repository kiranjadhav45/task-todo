import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')

  const generateRandomID = () => {

  }

  const addTodo = (todo) => {
    if(todo==''){
      return
    }
    const data = [...todos]
    const record = {
      id: data?.length + 1 || 1,
      title: todo
    }
    setTodos([...data, record])
    setTodo('')
  }

  const removeTodo = (id) => {
    const filtered = todos && todos.filter((item, index) => item.id !== id);
    setTodos(filtered);
  }

  return (
    <>
      <div style={{ maxWidth: "400px", margin: 'auto' }}>
        <h4 style={{ textAlign: 'center' }}>Add Todo</h4>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', gap: '12px' }}>
          <input style={{ display: 'inline-block' }} type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
          <button style={{ display: 'inline-block' }} onClick={() => addTodo(todo)}>add</button>
        </div>

        {todos && todos.map((item, index) => (
          <div style={{display:'flex',width:'100%' ,marginBottom:'10px'}} key={item?.id}>
            <span style={{display:'inline-block',flex:'1' ,marginTop:'20px'}}>{item.title}</span>
            <button style={{display:'inline', height:''}} onClick={() => removeTodo(item?.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
