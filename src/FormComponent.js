import React, { useEffect, useState } from 'react'

const FormComponent = () => {
    const[items,setItems] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/employee').then(res=>{ return res.json()}).then(data=>{
            console.log(data)
            setItems(data)
        })
    },[])
  return (
    <div className="form-component">
        {items.map(item =>(
            <div className="contain"  key={item.id}>
            <div className="name">{item.name}</div>
            <div className="address">{item.address}</div>
            <div className="number">{item.number}</div>
            </div>
        ))}
    </div>
    
  )
}

export default FormComponent
