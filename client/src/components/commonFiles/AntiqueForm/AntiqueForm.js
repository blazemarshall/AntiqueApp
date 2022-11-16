import { useEffect, useState } from "react";
import './AntiqueForm.css'
import FurnitureForm from "./FurnitureForm";
import BookForm from "./BookForm";
export default function AntiqueForm({submitHandler,initialFields,editBool,categoryValue}){
const [form,setForm] = useState({});

useEffect(()=>{
    if(initialFields){setForm(initialFields)}
},[initialFields])

const changeHandler = e => {
    setForm({...form,[e.target.name]:e.target.value });
}


console.log(categoryValue,'category')
    return (
        <div>
          { categoryValue === 'furniture' &&  <FurnitureForm categoryValue={categoryValue} changeHandler={changeHandler} submitHandler={submitHandler} initialFields={initialFields} editBool={editBool} form={form} setForm={setForm}/>}
          { categoryValue === 'books' && <BookForm categoryValue={categoryValue} changeHandler={changeHandler} submitHandler={submitHandler} initialFields={initialFields} editBool={editBool} form={form} setForm={setForm}/>}
        </div>
)
}