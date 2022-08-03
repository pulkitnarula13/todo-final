import React, { useState } from 'react'
import Form from './Form';

function List() {

    const [ list, setList ] = useState([]);

  return (
    <>
    <div style={{display:"flex",justifyContent:"center"}}>
        <h1>The ToDo List for the day</h1>
        
    </div>
    <Form/>
    </>
  )
}

export default List