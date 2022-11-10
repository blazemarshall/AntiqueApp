import { useNavigate } from "react-router";
export default function FurnitureForm({submitHandler,initialFields,form,editBool,setForm,changeHandler}){
    const navigate = useNavigate();
    return (
        <div className="form-container">
    <form className="form-actual"
     onSubmit={(e)=>{
        e.preventDefault();
        submitHandler(form);
        // setForm(initialFields)
        navigate('/antiques')
        }}>
    <div className="inputList-container">


    <div className="inputList-columns">
      <div className="inputList-labels-list" >

      {editBool && <p className="inputList-label">Id: </p>  }
      <p className="inputList-label">Name: </p>  
      <p className="inputList-label">Category: </p>  
      <p className="inputList-label">Quantity: </p>  
      <p className="inputList-label">Value: </p>  
      <p className="inputList-label">Material: </p>  
      <p className="inputList-label">Color: </p>  
      <p className="inputList-label">Style: </p>  
      <p className="inputList-label">Brand: </p>  
      <p className="inputList-label">Model: </p>  
      <p className="inputList-label">Time Period: </p>  
      <p className="inputList-label">Condition: </p>  
      <p className="inputList-label">Origin: </p>  
      <p className="inputList-label">Purpose: </p>  
      <p className="inputList-label">Owner: </p>  
      <p className="inputList-label">History: </p>  
      <p className="inputList-label">Size: </p>  
      <p className="inputList-label">Comment: </p>
    </div>

    <div className="inputList-inputs-list" >
        {editBool && <input id="id"  name="id"    type="text" placeholder="Id"          className="inputList-input" onChange={changeHandler} value={form.id}          maxLength="50"    aria-label="id input box" readOnly/>}
        <input id="name"       name="name"        type="text" placeholder="Name"        className="inputList-input" onChange={changeHandler} value={form.name}        maxLength="50"    aria-label="name input box" />
        <input id="category"   name="category"    type="text" placeholder="Category"    className="inputList-input" onChange={changeHandler} value={form.category}    maxLength="50"    aria-label="category input box" />
        <input id="quantity"   name="quantity"    type="text" placeholder="Quantity"    className="inputList-input" onChange={changeHandler} value={form.quantity}    maxLength="50"    aria-label="quantity input box" />
        <input id="value"      name="value"       type="text" placeholder="Value"       className="inputList-input" onChange={changeHandler} value={form.value}       maxLength="50"    aria-label="value input box" />
        <input id="material"   name="material"    type="text" placeholder="Material"    className="inputList-input" onChange={changeHandler} value={form.material}    maxLength="50"    aria-label="material input box"/>
        <input id="color"      name="color"       type="text" placeholder="Color"       className="inputList-input" onChange={changeHandler} value={form.color}       maxLength="50"    aria-label="color input box" />
        <input id="style"      name="style"       type="text" placeholder="Style"       className="inputList-input" onChange={changeHandler} value={form.style}       maxLength="50"    aria-label="style input box" />
        <input id="brand"      name="brand"       type="text" placeholder="Brand"       className="inputList-input" onChange={changeHandler} value={form.brand}       maxLength="50"    aria-label="brand input box" />
        <input id="model"      name="model"       type="text" placeholder="Model"       className="inputList-input" onChange={changeHandler} value={form.model}       maxLength="50"    aria-label="model input box" />
        <input id="timePeriod" name="timePeriod"  type="text" placeholder="Time Period" className="inputList-input" onChange={changeHandler} value={form.timePeriod}  maxLength="50"    aria-label="time period input box" />
        <input id="condition"  name="condition"   type="text" placeholder="Condition"   className="inputList-input" onChange={changeHandler} value={form.condition}   maxLength="50"    aria-label="condition input box" />
        <input id="origin"     name="origin"      type="text" placeholder="Origin"      className="inputList-input" onChange={changeHandler} value={form.origin}      maxLength="50"    aria-label="origin input box" />
        <input id="purpose"    name="purpose"     type="text" placeholder="Purpose"     className="inputList-input" onChange={changeHandler} value={form.purpose}     maxLength="50"    aria-label="purpose input box" />
        <input id="owner"      name="owner"       type="text" placeholder="Owner"       className="inputList-input" onChange={changeHandler} value={form.owner}       maxLength="50"    aria-label="owner input box" />
        <input id="history"    name="history"     type="text" placeholder="History"     className="inputList-input" onChange={changeHandler} value={form.history}     maxLength="100"   aria-label="history input box" />
        <input id="size"       name="size"        type="text" placeholder="Size"        className="inputList-input" onChange={changeHandler} value={form.size}        maxLength="50"    aria-label="size input box" />
        <input id="comment"    name="comment"     type="text" placeholder="Comment"     className="inputList-input" onChange={changeHandler} value={form.comment}     maxLength="100"   aria-label="comment input box" /> 
       
      </div>
     </div> 
    </div>
    <button className="inputList-btn">Submit</button>
    </form>

</div>
    )
}