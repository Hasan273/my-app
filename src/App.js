import "./App.css";
import List from "./List";
import {Routes, Route} from 'react-router-dom';
import {useState} from "react";
import {uid} from "uid";
import Header from "./components/Header";
import {BiEdit} from 'react-icons/bi';
import {AiFillDelete} from 'react-icons/ai'
import {AiFillCheckSquare} from 'react-icons/ai'


function App() {
  const [contacts,setContacts] = useState([
    {
    id: 1,
    name: "Hasanudin",
  },
  {
    id: 2,
    name: "Sehabudin",
  },
  {
    id: 3,
    name: "Aldiansyah",
  },
  {
    id: 4,
    name: "Zaki Fauji",
  },
  {
    id: 5,
    name: "Fikri Hida",
  },
  {
    id: 6,
    name: "Naufal Hid",
  },
  {
    id: 7,
    name: "Azki Zianu",
  }
]);

const [isUpdate,setIsUpdate] = useState({id:null, status: false});
const [query,setQuery]= useState("");
const [formData,setFormData] = useState({
  name: ""
})

function handleChange(e){
  let data = { ...formData};
  data[e.target.name] = e.target.value;
  setFormData(data);
}

function handleSumbit(e){
  e.preventDefault();
  // alert("oke");
  let data= [ ...contacts];
if (formData.name === ""){
  return false;
}

if (isUpdate.status){
  data.forEach((contact)=>{
    if(contact.id === isUpdate.id){
      contact.name = formData.name;
    }
  });
}else{
  data.push({id: uid(), name: formData.name});
  
}

setContacts(data);
setFormData({name: ""});
}

function handleEdit(id){
  let data=[...contacts];
  let foundData = data.find(contact => contact.id == id);
  setFormData({name:foundData.name});
  setIsUpdate({id:id, status:true});
}

function handleDelete(id){
  let data = [...contacts];
  let filteredData = data.filter(contact => contact.id !== id);
  setContacts(filteredData);
}

  return (
    <div className='container'>
    <div className='app-wrapper'>
      <div>
        <Header />
      </div>

      <div className="app">
    <input type="text" placeholder="Search..." className="form-control"  onChange={e=>setQuery(e.target.value)}/>
    
    <span className="list">
    {contacts.filter((contact)=>contact.name.toLowerCase().includes(query)).map((contact)=> (
      <span key={contact.id} className="list-item">{contact.name}
      <AiFillCheckSquare className='edit-icon'/>
       <BiEdit onClick= {()=>handleEdit(contact.id)} />
        <AiFillDelete onClick= {()=>handleDelete(contact.id)} className='delete-icon'/>
            </span>
    ))}
    </span>
    <form onSubmit= {handleSumbit} className="px-3 py-4">
        {/* <div className="form-group"> */}
          {/* <label htmlFor="">Name</label> */}
          {/* <input type="text" className="form-control"placeholder="Search..." /> */}
          <input type="text" className="form-control" placeholder="Sumbit" onChange={handleChange} value= {formData.name} name="name" />
          <button type="submit" className="button-Add">
            save
          </button>
        {/* </div> */}
      </form>
    
    </div>

      

      {/* <List handleEdit={handleEdit} handleDelete={handleDelete}data={contacts}/> */}
    </div>
    </div>
  );
}

export default App;