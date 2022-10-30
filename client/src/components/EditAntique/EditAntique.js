import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { findAntique, updateAntique } from "../../utils/api";
import ErrorAlert from "../commonFiles/ErrorAlert";
import AntiqueForm from "../commonFiles/AntiqueForm/AntiqueForm";
import "./EditAntique.css"

export default function EditAntique(){
    
    const [errors,setErrors] = useState(null);
    const [antique,setAntique] = useState(null);
    const [form,setForm] = useState([])
    const {id} = useParams();

useEffect(()=>{
    async function loadAntique(){
        let ac= new AbortController();
        try{
            const SingleAntique = await findAntique(id,ac.signal)
            setForm(SingleAntique)
        } catch(err){setErrors(err)}
        return ()=> ac.abort();
    }
    loadAntique();
},[id])



 const changeHandler = e =>{
     setForm({...form,[e.target.name]:e.target.value})
    }
    
    async function submitHandler(form){
        const ac = new AbortController();
        try{
            await updateAntique(form,ac.signal);
        } catch(err){
            setErrors(err);
            throw err;
        }
        return ()=> ac.abort
    }

    return (
    <div className="Edit-page-container">
        <div>

    <h3 className="title-container">Edit Your Antique</h3>
    <AntiqueForm submitHandler={submitHandler} initialFields={form} editBool={true}/>
    <ErrorAlert err={errors} />
        </div>
</div>
)
}