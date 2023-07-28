
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
import ClickCounter from './components/HOC/ClickCounter';
import HoverCounter from './components/HOC/HoverCounter';
import { Provider } from 'react-redux';
import Store from './components/REACT-REDUX/Store';
import CakeContainer from './components/REACT-REDUX/CAKE/CakeContainer';
import HookCakeContainer from './components/REACT-REDUX/CAKE/HookCakeContainer';
import IceCreamContainer from './components/REACT-REDUX/ICECREAM/IceCreamContainer';
import UserContainer from './components/REACT-REDUX/USER/UserContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Menu from './components/Menu';
import ViewNotFound from './components/Pages/ViewNotFound';

import UsersRoute from './components/Pages/UsersRoute';
import Posts from './components/Pages/Posts';
import Latest from './components/Pages/Latest';
import Disliked from './components/Pages/Disliked';
import Liked from './components/Pages/Liked';
import Oldest from './components/Pages/Oldest';
import EditUser from './components/Pages/EditUser';
import EditPost from './components/Pages/EditPost';
import AddPost from './components/Pages/AddPost';
import UserLogin from './components/Pages/UserLogin';
import SignUp from './components/Pages/SignUp';



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
    // <div>
        /* <Greet name="Peter Parker" age = {45} isAdmin={true}/>
        <Person names={nameList}/>
        {/* <Third comp fruits ={fruits}/> */
        /* <EmployeeList data = {personData}/> */
        /* <Counter/> */

        /* <table className='table table-bordered'>
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
        </table> */

        // {/* <ObjectState/> */}
        // // {/* <Login/> */}

        // {/* <TodoMain/> */}
        
        // {/* <UseEffectDemo/> */}
        // {/* <UseRefDemo/> */}
        // {/* <UseRefDom/> */}
        // {/* <UseContext/> */}
        // {/* <Users/> */}
        // {/* <ClickCounter myValue={2} info = "I am Click Counter"/>
        // <HoverCounter myValue={3} info = "I am Hover Counter"/> */}

        // <Provider store={Store}>
        //   <HookCakeContainer/>
        //   <hr/>
        //   <IceCreamContainer/>
        //   <hr/>
        //   <UserContainer/>

        // </Provider>
      
       
        <BrowserRouter>
        
        <Menu/>
     
          <Routes>
            
            <Route path="/" element = {<Home/>}/>
            <Route path='posts' element={<Posts/>}>
                <Route path='latest' element={<Latest/>}/>
                <Route path='oldest' element={<Oldest/>}/>
                <Route path='liked' element={<Liked/>}/>
                <Route path='disliked' element={<Disliked/>}/>
            </Route>
            <Route path="/about" element = {<About/>}/>
            <Route path="/todo" element = {<TodoMain/>}/>
            <Route path="/users" element = {<UsersRoute/>}/>
            {/* <Route path="*" element={<ViewNotFound/>}/> */}

            <Route path='/users/:id' element={<EditUser/>}/>  

            <Route path='/posts/latest/edit/:id' element={<EditPost/>}/>  
            {/* :id -> placeholder */}
            <Route path='add' element={<AddPost/>}/>  
            <Route path='login' element={<UserLogin/>}/>  
            <Route path='signup' element={<SignUp/>}/>  

          </Routes>
 
        </BrowserRouter>
        



    // {/* </div> */}
  );
}

export default MyApp;


//props



