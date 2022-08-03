import React, { useEffect, useState } from 'react'
import Form from './Form';
import axios from "axios"

function Todo() {

    const [getvalues, setgetvalues] = useState([]);

    useEffect(() => {
        const alldata = axios.get('/api').then((response) => {
            
            setgetvalues(response.data)

        }


        ).catch(err => { console.log(err) })

    },[getvalues]);

    const Deleteme = (id)=>{
        console.log(id);
                axios.delete(`/api/${id}`).then((response)=>{
                    console.log("data deleted")
                    alldata();
                })
    }

    const UpdateItem = (id)=>{
                // axios.put(`/api/${id}`,{task:})
                console.log(id);

    }

    
   
    return (
        <div style={{display:"column"}}>
            { getvalues.map((item)=> <div  style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px",gap:"10px", border: "1px solid red", padding: '5px'}}><h2 style={{margin:0}}>{item.task}</h2> <button className='button1'  onClick={()=>{Deleteme(item._id)}}>Delete</button></div>)}
        </div>
      )
    
}


export default Todo