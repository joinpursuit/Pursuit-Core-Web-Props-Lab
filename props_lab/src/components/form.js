import React, { useState } from 'react'
import History from "./History"


const Form =()=> {
    const [amount,setAmount]=useState(5)
    const [total, setTotal]=useState(0)
    const [history, setHistory]=useState([])

    const handleAmount=(e)=>{
        setAmount(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        e.persist()
        setTotal(total+parseInt(e.target.elements[2].value))
        if(!history){
            setHistory({name : e.target.elements[0].value, comment:e.target.elements[1].value,amount:e.target.elements[2].value});
        }else{
            setHistory(history=>[...history,{name : e.target.elements[0].value, comment: e.target.elements[1].value,amount:e.target.elements[2].value}])
        }
    }

    console.log(history)
        return (
            <div>
            <div>
                <h3>Recent Donations</h3>
                <History history={history}/>
            </div>
            <div>
            <label >Raised ${total}  of $3000</label>
            <progress value={total}  max="3000"> {total/3000}  </progress>
            </div>
            <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input placeholder="Your Name"/>
            <label>Caption</label>
            <input placeholder="..."/>
            <label>Amount to Donate</label>
            <input type="range" min="5" max="1000" onChange={handleAmount}/>
            <p>{amount}</p>
            <button type="submit">Donate</button>
            </form>
            </div>
        )
    }

export default Form
