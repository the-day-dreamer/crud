import React, { useState } from 'react'

const Form = () => {
    const[name,setName] = useState("")
    const[address,setAddress] = useState("")
    const[number,setNumber] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault();
        const item = {name,address,number}
        fetch('http://localhost:8000/employee',{
          method : "POST",
          headers : {
            'Content-Type' : 'application/json'
          },
          body : JSON.stringify(item)

        }).then(res=>{
          return res.json()
        }).then(data=>{
          console.log(data)
        })
        setName("")
        setAddress("")
        setNumber("")
    }
  return (
    <form className="container form-flex" onSubmit={handleSubmit}>
    <div>    
    <label>NAME:</label>
    <input type="text" value={name} onChange = {(e)=>setName(e.target.value)}/>
    </div>
    <div><label>ADDRESS:</label>
    <textarea name="" id="" cols="30" rows="10" value={address} onChange = {(e)=>setAddress(e.target.value)}></textarea></div>
    <div><label>MOB-NUMBER:</label>
    <input type="number" value={number} onChange = {(e)=>setNumber(e.target.value)}/></div>
    <button className="myBtn" >ADD EMPLOYEE</button>
</form>
  
  )
}

export default Form
