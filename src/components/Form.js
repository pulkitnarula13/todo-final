import React, { useState } from 'react'
import axios from "axios"
import Todo from './Todo';


function Form() {

    const [input, setInput] = useState('')

    // const onSubmit = 

    const handleChange = e => {
      setInput(e.target.value);
    }

    const handleSubmit = e =>  {
      e.preventDefault();

      const data = {
        task: input,
      }

      axios.post("/api", data)
          .then(result => {
              console.log(result.data);
          })
          .catch(error => console.log(error.response.data))

      setInput('');
    } 

  return (
    <>
    <div style={{display:"flex",justifyContent:"center"}}>
    <form sclassName="formClass" onSubmit={handleSubmit}>
        <input type="text" name="task" className="taskClass" 
          placeholder="Add a task" value={input} onChange={handleChange}/>
        <button className='submitBtn'>Add todo</button>
    </form>
    </div>
    <div style={{display
    :"flex",justifyContent:"center"}}>
    <section style={{display:"flex",justifyContent:"center",marginTop:"50px",border:"1px solid black",borderColor:"black",padding:"10px",width:"457px",borderRadius:"10px"}}>
      <Todo/>
    </section>
    </div>
    </>
  )
}

export default Form