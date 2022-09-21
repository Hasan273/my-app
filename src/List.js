import React from "react";

export default function List({data,handleEdit,handleDelete}) {
  return (
    <div className="list-group">
        {
            data.map((contact)=>{
                return(
    <div className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="list-item">{contact.name}
            <button onClick= {()=>handleEdit(contact.id)} className="buttonEdit">Edit</button>
            <button onClick= {()=>handleDelete(contact.id)} className="buttonDel">Del</button>
          </h5>
        </div>
      </div>
                )
            })
        }
    </div>
  );
}