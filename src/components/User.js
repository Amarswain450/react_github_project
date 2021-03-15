import React from 'react'
import { FcApproval } from "react-icons/fc";

const User = (props) => {
    const {users} = props;
    return (
        <>
            <h2 className="text-center mt-2 p-2">List Of GitHub Users</h2> 
           <div className="container mt-3">
               <div className="row text-center">
               {
                   users.map((curElem) => {
                       return(
                           <div className="col-md-4 mt-5" key={curElem.id}>
                       <div className="card p-2">
                           <div className="row">
                            <div className="col-md-5">
                               <div className="card_img">
                                   <img src={curElem.avatar_url} alt=""/>
                               </div>
                           </div>
                           <div className="col-md-7">
                               <div className="card_details_first">
                                   <h3>{curElem.login} <FcApproval /></h3>
                                   <h6>{curElem.node_id}</h6>
                               </div>
                           </div>
                           </div>
                       </div>
                   </div>
                       )
                   })
                   }
                   
               </div>
           </div>
        </>
    )
}

export default User
