import React, { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'

import { fetchUsers } from './UserAction'


/*

useSelector hook => in order to get the properties from the store we are using this hook

useDispacth hook => to get access of the actions we will use this

*/


export default function UserContainer() {

    const commentData = useSelector(state=>state.User)

    const dispatch = useDispatch()

    // useEffect(()=>{
    //     dispatch(fetchUsers())
    // },[])

    // get the data from api as soon as component loads



  return (
    <div className='container mt-4'>
            <div className='row mt-4'>
                <div className='col-md-12'>
                  {
                    commentData.loading?(
                    <h1 className='display-4'>Loading</h1>
                  )
                  : commentData.error?(
                    <h1>{commentData.error}</h1>
                  ):(
                    <div>
                        <h1 className="display-4 text-success">List of Comments</h1>
                {/* <button onClick={()=>dispatch(fetchUsers())}  className="btn btn-sm btn-warning">Get Data from api</button> */}

                        {commentData.users.map((u,i)=>(
                            <p key={i}>{u.id} {u.name}</p>
                        ))}

                        <button onClick={()=>dispatch(fetchUsers())} className="btn btn-sm btn-warning">Get Data from api</button>
                        
                    </div>

                  )}



                </div>
           

            </div>
    </div>
  )
}



// import React,{useEffect} from "react";
// import {  useDispatch, useSelector } from "react-redux";
// import { fetchUsers } from "./UserAction";

// /*
//     useSelector hook => in order to get the properties fro the store we are using this hook

//     useDispatch hook => to get access to the actions we will use
// */
// function UserContainer() {
//   // gets the state from the tore
//   const commentData = useSelector((state) => state.user);
//   // gets dispatch funciton
//   const dispatch = useDispatch();
// //   useEffect(()=> {
// //     fetchUsers();
// //   },[])
//   console.log(commentData.users)
//   return (
//     <div className="container mt-4">
//       <div className="row">
//         <div className="col-md-12">
//           {commentData.loading ?( <h1>loading</h1>) : commentData.error ?
//           (<h1>commentData.error?</h1>)
//           : 
//           (<div>
//             <h1 className="display -4 text-success">List of Comments</h1>
//             {commentData.users.map((u)=> (
//                 <p>{u.id} {u.name}</p>
//             ))}
//             <button className="btn btn-sm btn-primary" onClick={()=>dispatch(fetchUsers())}>Fetch users</button>
//           </div>)}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserContainer;

