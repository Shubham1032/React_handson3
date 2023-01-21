import React from 'react'
import { useState } from 'react'
import './App.css'



export default function RegistrationForm() {
  const [state,setState] = useState({Name:"",Department:"",Rating:"",Employees:[]});
 const [show,setShow] = useState(false)
  
 function changeShow(){
  setShow(!show)
 }
 function rendorback(){
  changeShow();
 }
  function ChangeValues(e){
    
    setState({...state,[e.target.name] : e.target.value})
    console.log(state)
  }

  function StoreInfo(e){
    e.preventDefault();
    const empobj={Name:state.Name,Department:state.Department,Rating:state.Rating}
    
    const arr=state.Employees;
           arr.push(empobj)
  
             setState({Employees : arr})

             changeShow();
}  
if(show===false){


    return (
    <div>
    <h1> EMPLOYEE FEEDBACK FORM </h1>
    <form action="">
      <label htmlFor="Name">Name</label>
      <input name='Name' type="text" value={state.Name}  onChange={ChangeValues} />
      <br/> <label htmlFor="Department">Department</label>
      <input name='Department' type="text" value={state.Department}  onChange={ChangeValues}  />
      <br/><label htmlFor="Rating">Rating</label>
      <input name='Rating' type="number" value={state.Rating}  onChange={ChangeValues} />
      <br/><button onClick={StoreInfo}>Submit</button>
      </form>
      <div>
{console.log(state)}
      </div>
    </div>
  )
}
else{
     return(
      <div>
        <button onClick={rendorback}>Back to form</button>
        <div>
          <h1>Data of Employees feedback</h1>
        </div>
        <div id='smallContainer'>
        {state.Employees.map((value,index)=>{
                 return(
                  <div id='items'>Name = {value.Name}, Deparment= {value.Department}, Rating= {value.Rating}  </div>
                 )
              
})
}
        </div>
        {/* {
          state.Employees.map(value,index) {
          console.log(value.Name)
          }
        } */}
      </div>
     )
  
  
     }
    
  }

