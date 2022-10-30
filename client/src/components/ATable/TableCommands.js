export default function TableCommands({handlePrint}){
    return(
        <div className="tableCommands-container">
               <button onClick={handlePrint} className='tableCommands-btn'>Print</button>

        </div>
    )
}