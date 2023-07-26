
import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import EmployeeList from './components/EmployeeList';
import Greet from './components/Greet';
import Person from './components/Person';
import Summary from './components/Summary';
import ObjectState from './components/ObjectState';
import Login from './components/Login'
import TodoMain from './components/TodoList/TodoMain'
import UseEffectDemo from './components/Hooks/UseEffectDemo';
import UseRefDemo from './components/Hooks/UseRefDemo';
import UseRefDom from './components/Hooks/UseRefDom';
import UseContext from './components/Hooks/UseContext';
import Users from './components/API/Users';


function MyApp() {

  const nameList ={
    email : 'abc@gmail.com',
    gender :'Male',
    fullname :'Steve Harvey'
  }

  // create an array 

  const fruits = ["kjsj",'khsks']

  //

  // array of object

  const personData = [
      {id:101,name:"John",age:23},
      {id:102,name:"Rose",age:24},
      {id:103,name:"David",age:25},
      {id:104,name:"Peter",age:43},
  ]

  let [names,setNames] = useState(["John","Peter","Parker"])
  const promoteName = (employeeName) =>{   //employeename = Parker

    //names = ["John","Peter","Parker"]
    //employeename = Parker

        //val = "John"
         
        // John ! = Parker   => True  John will get added into names array

        // names = [parker,John]   after 1st iteration

         //val = "Peter"

        // Peter ! = Parker   => True  Peter will get added into names array

         // names = [parker,John,Peter]   after 2nd iteration


        //val = "Parker"

        // Parker ! = Parker   => False  Parker will not get added into names array

         // names = [parker,John,Peter]   after 3rd iteration

      names = [employeeName,...names.filter(val=>val!=employeeName)] 
      
      setNames(names)
  }

  return (
    <div>
        {/* <Greet name="Peter Parker" age = {45} isAdmin={true}/>
        <Person names={nameList}/>
        {/* <Third comp fruits ={fruits}/> */}
        {/* <EmployeeList data = {personData}/> */}
        {/* <Counter/> */}

        {/* <table className='table table-bordered'>
          <thead>
              <tr>
                <th>S.no.</th>
                <th>Names</th>
                <th>Actions(s)</th>
              </tr>
          </thead>
          <tbody>
            {
              names.map((emp,index)=>(
                <tr key={index}>
                    <Summary
                    index= {index+1}
                    name={emp}
                    promoteName = {promoteName}
                    />
                </tr>
              ))
            }
          </tbody>
        </table> */}

        {/* <ObjectState/> */}
        {/* <Login/> */}

        {/* <TodoMain/> */}
        
        {/* <UseEffectDemo/> */}
        {/* <UseRefDemo/> */}
        {/* <UseRefDom/> */}
        {/* <UseContext/> */}
        <Users/>

    </div>
  );
}

export default MyApp;


//props



