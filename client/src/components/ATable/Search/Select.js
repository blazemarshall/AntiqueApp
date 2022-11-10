import { useState } from "react"

export default function Select({setField,field}){

    const handleChange =(e)=>{
        setField(e.target.value)
    }
    
    return (
        <div className="field-select-container">
            <label className="field-select-label" htmlFor='field-select'>Choose a field : </label>
            <select name='fields' id='field-select' className="field-select" onChange={handleChange} value={field}>
                <option className="field-option" value='name'>Name</option>
                <option className="field-option" value='id'>Id</option>
                <option className="field-option" value='category'>Category</option>
                <option className="field-option" value='material'>Material</option>
                <option className="field-option" value='style'>Style</option>
                <option className="field-option" value='timePeriod'>Time Period</option>
                <option className="field-option" value='condition'>Condition</option>
                <option className="field-option" value='owner'>Owner</option>
                <option className="field-option" value='brand'>Brand</option>
                <option className="field-option" value='model'>Model</option>
            </select>
        </div>
    )
}