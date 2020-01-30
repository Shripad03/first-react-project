import React from 'react'
import './Person.css'
const person = (props)=>{
  
    
    return(
        <div className="Person">
            {/* <p>This is a Person and the Person's age is
                 {Math.floor(Math.random()*25)}</p> */}
            <p onClick={props.clickPerson}>
                I am {props.name} and I am {props.age} years old
                </p>  
                <p>{props.children}</p> 
                
               <input type="text" onChange={props.changed} value={props.name}/> 
        </div>
    )
}
export default person