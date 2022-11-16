import { createAntique } from "../../utils/api";
import React,{useState} from "react";
import ErrorAlert from "../commonFiles/ErrorAlert";
import './AddAntique.css'
import AntiqueForm from "../commonFiles/AntiqueForm/AntiqueForm";
import { useNavigate } from "react-router";
export default function AddAntique(){
const [apiErrs,setApiErrs] = useState(null);
const [categoryValue,setCategoryValue] = useState('furniture')
const navigate = useNavigate();


async function createSubmitHandler(form){
        const ac= new AbortController();
        try{
            await createAntique(form,ac.signal)
            .then(window.alert('Created new antique!!!'))
            .then(navigate('/antiques'))
            .then(window.location.reload(false))

        } catch (err){
            setApiErrs(err);
            console.log(err);
            throw err;
        }
        return () => ac.abort();
}

    const initialFields = {
        category:categoryValue,
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

 const categoryChanger = (e) => {
    setCategoryValue(e.target.value)
 }

    return (
    <div className="AddAntique-page-container">
        <div>
        <h3 className="title-container">Create New Antique</h3>
        <div className="category-select-container">

        <label className="category-select-label" htmlFor="category-select">Choose a category : </label>
        
        <select id='category-select' className='category-select' value={categoryValue} onChange={categoryChanger}>
            <option className='category-option' value='furniture'>Furniture</option>
            <option className='category-option' value='books'>Books</option>
        </select>

        </div>

        <AntiqueForm
        submitHandler={createSubmitHandler}
        initialFields={initialFields}
        editBool={false}
        categoryValue={categoryValue}
        />
        <ErrorAlert err={apiErrs} />
        </div>
    </div>
        )
}