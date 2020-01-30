import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import person from './Person/Person';

class App extends Component{
 state={     //with state object you create initial state
   persons:[
     {id:1,name:'Allan',age:22},
     {id:2,name:'David',age:32},
     {id:3,name:'Test',age:12},

   ],
   showPersons:false
 }
 switchNameHandler=(newName)=>{
   //console.log('Btn clicked')
   //NEVER DO AS BELOW
   //this.state.persons[0].name='New Name'
   this.setState({
     persons:[
      {name:newName,age:22},
      {name:'Muller',age:32},
      {name:'Manish',age:12},
     ]
   })


 }
 nameChangeHandler=(event,id)=>{
   const personIndex = this.state.persons.findIndex((p)=>{
     return p.id ===id
   })
   //const person = this.state.persons[personIndex]  //mutable

   const person={ //immutable
     ...this.state.persons[personIndex]
   }
    //OR
  //const person1= Object.assign({},this.state.persons[personIndex])//immutable
   person.name=event.target.value
   const persons =[...this.state.persons]
   persons[personIndex]=person
   this.setState({persons:persons})
  
  
 }
 togglePersonHandler=()=>{
   const doesShow = this.state.showPersons
   this.setState({showPersons: !doesShow})
 }
 deletePersonHandler=(personIndex)=>{
   //const persons = this.state.persons.slice()
   const persons=[...this.state.persons]
   persons.splice(personIndex,1)
   this.setState({persons:persons})
 }
  render(){
    const btnStyle={
      backgroundColor:'red',
      color:'white',
      font:'inherit',
      cursor:'pointer',
      border:'1px solid blue',
      padding:'8px'
    }
    let persons=null

    if(this.state.showPersons){
      persons=(
        <div>
           {this.state.persons.map((person,index)=>{
              return(
              <Person name={person.name}
              age={person.age} key={person.id} 
              clickPerson={()=>this.deletePersonHandler(index)}
              changed={(event)=>this.nameChangeHandler(event,person.id)} />
              )
           })} 
     {/* <Person name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
              clickPerson={this.switchNameHandler.bind(this,'TestName1')}
              changed={this.nameChangeHandler}
              />
     
     <Person name={this.state.persons[1].name}
             age={this.state.persons[1].age}/>
    
    <Person name={this.state.persons[2].name}
             age={this.state.persons[2].age}>Hobbies : Drawing</Person> */}
     </div>

      )
    }
    return(
      <div className="App">
    
     <h1>Hi This is a React App</h1>
     <p>Understanding React class component</p>
     {/* <button style={btnStyle}
     onClick={()=>this.switchNameHandler('TestName3')}>
        ChangeName
        </button> */}

      <button style={btnStyle}
        onClick={this.togglePersonHandler}>
        TogglePerson
        </button>     
        {persons}
  
         </div>
    )
    //return React.createElement('div',null,'h1','HelloReact','p','ClassComponent')
  }
}
export default App;
