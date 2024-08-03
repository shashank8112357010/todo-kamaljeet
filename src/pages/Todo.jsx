import React , {useState} from 'react'
import axios from 'axios'
const Todo = () => {
  const adddress = "http://localhost:4200/todo"
  const [todoData, setTodoData] = useState()

  function handleTodo() {
    let body ={
      name : todoData ,
      status : "Pending"
    }

    axios.post(adddress , body).then((response)=>{
     console.log(response , "response");
    }).catch((error)=>{
      console.log(error , "error while sending data to db ");
    })

  }



  return (
    <div className='d-flex'>
      <input className='form-control w-25' onChange={(e) => setTodoData(e.target.value)} placeholder='Enter todo' />
      <button className='btn btn-primary btn-sm' onClick={handleTodo}>Add Todo</button>
    </div>
  )
}

export default Todo