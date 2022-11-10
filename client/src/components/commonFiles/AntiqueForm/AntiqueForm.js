import { useEffect, useState } from "react";
import './AntiqueForm.css'
import FurnitureForm from "./FurnitureForm";
import BookForm from "./BookForm";
export default function AntiqueForm({submitHandler,initialFields,editBool,category}){
const [form,setForm] = useState({});

useEffect(()=>{
    if(initialFields){setForm(initialFields)}
},[initialFields])

const changeHandler = e => {
    setForm({...form,[e.target.name]:e.target.value });
}



    return (
        <div>
          { category === 'furniture' &&  <FurnitureForm changeHandler={changeHandler} submitHandler={submitHandler} initialFields={initialFields} editBool={editBool} form={form} setForm={setForm}/>}
          { category === 'book' && <BookForm changeHandler={changeHandler} submitHandler={submitHandler} initialFields={initialFields} editBool={editBool} form={form} setForm={setForm}/>}
        </div>
)
}