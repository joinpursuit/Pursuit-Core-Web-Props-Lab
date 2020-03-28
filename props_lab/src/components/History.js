import React from 'react'

const History =({history})=> {

   const displayComment= history.map(list=>{
        return (<div className="comment" key={list.name}><b>{list.name} donated $ {list.amount}</b><p>{list.comment}</p></div>)
    }).reverse()
        return ( 
            <>
                 {displayComment}
            </>
        )
    }

export default History