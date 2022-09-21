import "./App.css";
import List from "./List";
import {Routes, Route} from 'react-router-dom';
import {useState} from "react";
import {uid} from "uid";
import Header from "./components/Header";


function App() {
  const [contacts,setContacts] = useState([
    {
    id: 1,
    name: "Alex Packer",
  },
  {
    id: 2,
    name: "Alex Picker",
  }
]);

const [isUpdate,setIsUpdate] = useState({id:null, status: false});
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

      <form onSubmit= {handleSumbit} className="px-3 py-4">
        <div className="form-group">
          {/* <label htmlFor="">Name</label> */}
          <input type="text" className="form-control" onChange={handleChange} value= {formData.name} name="name" />
          <button type="submit" className="button-Add">
            Save
          </button>
        </div>
      </form>

      <List handleEdit={handleEdit} handleDelete={handleDelete}data={contacts} />
    </div>
    </div>
  );
}

export default App;