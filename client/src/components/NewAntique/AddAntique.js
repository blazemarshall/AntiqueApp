import { createAntique } from "../../utils/api";
import React,{useState} from "react";
import ErrorAlert from "../commonFiles/ErrorAlert";
import './AddAntique.css'
import AntiqueForm from "../commonFiles/AntiqueForm/AntiqueForm";
import { useNavigate } from "react-router";
export default function AddAntique(){
const [apiErrs,setApiErrs] = useState(null);
const navigate = useNavigate();
    async function createSubmitHandler(form){
        const ac= new AbortController();
        try{
            await createAntique(form,ac.signal);
            window.alert('Created new antique!!!')
            navigate('/antiques')

        } catch (err){
            setApiErrs(err);
            console.log(err);
            throw err;
        }
        return () => ac.abort();
    }

    const initialFields = {
        category:'',
        quantity:'',
        name:'',
        value:'',
        material:'',
        color:'',
        style:'',
        brand:'',
        model:'',
        timePeriod:'',
        condition:'',
        origin:'',
        purpose:'',
        owner:'',
        history:'',
        size:'',
        comment:'',
     }

    return (
    <div className="AddAntique-page-container">
        <div>
        <h3 className="title-container">Create New Antique</h3>

        <AntiqueForm
        submitHandler={createSubmitHandler}
        initialFields={initialFields}
        editBool={false}
        />
        <ErrorAlert err={apiErrs} />
        </div>
    </div>
        )
}