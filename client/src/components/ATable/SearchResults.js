import SearchResultItem from "./SearchResultItem"
// import {}


export default function SearchResults({filteredAntiques}){
    const filtered = filteredAntiques?.map(antique => {
        return(
    <SearchResultItem key={antique.id} antique={antique}/>
    )})
    console.log(filtered,"filtered")
    return (
        <div>search Results
            <table>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Category</th>
                    <th>Value</th>
                    <th>Material</th>
                    <th>Color</th>
                    <th>Style</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Time Period</th>
                    <th>Condition</th>
                    <th>Origin</th>
                    <th>Purpose</th>
                    <th>Owner</th>
                    <th>History</th>
                    <th>Size</th>
                    <th>Comment</th>
                    </tr>
                </thead>
            {filtered}
            </table>
        </div>
    )
}