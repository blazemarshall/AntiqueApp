import React from "react";
const AllAntiquesTable = React.forwardRef(({antiquesList},ref) =>{
    return (
        <div className={"table-container-allAntiques"}>
        <h1 className='table-title-h1'>All Antiques</h1>
        <table className={"table"} ref={ref}> 
             <thead className={'table-head'}>
             <tr className={'table-head-row tableRow'}>
                 <th className='table-heading'>Actions</th>
                 <th className='table-heading'>Id</th>
                 <th className='table-heading'>Quantity</th>
                 <th className='table-heading'>Name</th>
                 <th className='table-heading'>Category</th>
                 <th className='table-heading'>Value</th>
                 <th className='table-heading'>Purchase Price</th>
                 <th className='table-heading'>Sell Price</th>
                 <th className='table-heading'>Material</th>
                 <th className='table-heading'>Color</th>
                 <th className='table-heading'>Style</th>
                 <th className='table-heading'>Brand</th>
                 <th className='table-heading'>Model</th>
                 <th className='table-heading'>Time Period</th>
                 <th className='table-heading'>Condition</th>
                 <th className='table-heading'>Origin</th>
                 <th className='table-heading'>Purpose</th>
                 <th className='table-heading'>Owner</th>
                 <th className='table-heading'>History</th>
                 <th className='table-heading'>Size</th>
                 <th className='table-heading'>Comment</th>
                 <th className='table-heading'>Id</th>
                 <th className='table-heading'>Actions</th>
             </tr>
             </thead>
             <tbody className={'table-body'}>
                 {antiquesList}
             </tbody>
         </table>
     </div>
    )
})
export default AllAntiquesTable;