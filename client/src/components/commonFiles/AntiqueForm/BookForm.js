import { useNavigate } from "react-router";

export default function BookForm({submitHandler,initialFields,form,setForm,editBool,changeHandler}){
    const navigate = useNavigate();

    return(
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                submitHandler(form);
                navigate('/antiques')
              }}
              className='form-actual'
            > 
    <div className="inputList-columns">
    <div className="inputList-labels-list" >
     {editBool && <p className="inputList-label">Id: </p>  }
      <p className="inputList-label">Title: </p>  
      <p className="inputList-label">Author: </p>  
      <p className="inputList-label">Printed: </p>  
      <p className="inputList-label">Edition: </p>  
      <p className="inputList-label">Publisher: </p>  
      <p className="inputList-label">Quantity: </p>  
      <p className="inputList-label">Category: </p>  
      <p className="inputList-label">Value: </p>  
      <p className="inputList-label">Sell Price: </p>  
      <p className="inputList-label">Purchase Price: </p>  
      <p className="inputList-label">Type: </p>  
      <p className="inputList-label">Time Period: </p>  
      <p className="inputList-label">Condition: </p>  
      <p className="inputList-label">Owner: </p>  
      <p className="inputList-label">Comment: </p>
    </div>
    <div className="inputList-inputs-list" >
        {editBool && <input id="id" name="id"             type="text" placeholder="Id"                className="inputList-input" onChange={changeHandler} value={form.id}              maxLength="50"    aria-label="id input box" readOnly/>}
        <input id="title"           name="title"          type="text" placeholder="Title"             className="inputList-input" onChange={changeHandler} value={form.title}           maxLength="50"    aria-label="title input box" />
        <input id="author"          name="author"         type="text" placeholder="Author"            className="inputList-input" onChange={changeHandler} value={form.author}          maxLength="50"    aria-label="author input box" />
        <input id="printed"         name="printed"        type="text" placeholder="Printed"           className="inputList-input" onChange={changeHandler} value={form.printed}         maxLength="50"    aria-label="printed input box" />
        <input id="edition"         name="edition"        type="text" placeholder="Edition"           className="inputList-input" onChange={changeHandler} value={form.edition}         maxLength="50"    aria-label="edition input box" />
        <input id="publisher"       name="publisher"      type="text" placeholder="Publisher"         className="inputList-input" onChange={changeHandler} value={form.publisher}       maxLength="50"    aria-label="publisher input box" />
        <input id="quantity"        name="quantity"       type="text" placeholder="Quantity"          className="inputList-input" onChange={changeHandler} value={form.quantity}        maxLength="50"    aria-label="quantity input box" />
        <input id="category"        name="category"       type="text" placeholder="Category"          className="inputList-input" onChange={changeHandler} value={form.category}        maxLength="50"    aria-label="category input box" />
        <input id="value"           name="value"          type="text" placeholder="Value"             className="inputList-input" onChange={changeHandler} value={form.value}           maxLength="50"    aria-label="value input box" />
        <input id="sellPrice"       name="sellPrice"      type="text" placeholder="Sell Price"        className="inputList-input" onChange={changeHandler} value={form.sellPrice}       maxLength="50"    aria-label="sell price input box"/>
        <input id="purchasePrice"   name="purchasePrice"  type="text" placeholder="Purchase Price"    className="inputList-input" onChange={changeHandler} value={form.purchasePrice}   maxLength="50"    aria-label="purchase price input box"/>
        <input id="type"            name="type"           type="text" placeholder="Color"             className="inputList-input" onChange={changeHandler} value={form.type}            maxLength="50"    aria-label="type input box" />
        <input id="timePeriod"      name="timePeriod"     type="text" placeholder="Time Period"       className="inputList-input" onChange={changeHandler} value={form.timePeriod}      maxLength="50"    aria-label="time period input box" />
        <input id="condition"       name="condition"      type="text" placeholder="Condition"         className="inputList-input" onChange={changeHandler} value={form.condition}       maxLength="50"    aria-label="condition input box" />
        <input id="owner"           name="owner"          type="text" placeholder="Owner"             className="inputList-input" onChange={changeHandler} value={form.owner}           maxLength="50"    aria-label="owner input box" />
        <input id="comment"         name="comment"        type="text" placeholder="Comment"           className="inputList-input" onChange={changeHandler} value={form.comment}         maxLength="100"   aria-label="comment input box" /> 
       
        </div>
      </div>
        <button className="inputList-btn">Submit</button>
     </form>
    </div>
    )
}