import React from "react";
import {BiEdit} from 'react-icons/bi'


export default 
function List({data,handleEdit,handleDelete}) {
  
  return (
    <div className="list-group">
        {
            data.map((contact)=>{
                return(
    <div className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <div className="list-item">{contact.name}
            <BiEdit onClick= {()=>handleEdit(contact.id)} />
            <button onClick= {()=>handleDelete(contact.id)} className="button-delete task-button">
            <i className="fa fa-trash"></i>
            </button>
            </div>
        </div>
      </div>
                )
            })
        }
    </div>
  );
}