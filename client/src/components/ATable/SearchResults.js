import SearchResultItem from "./SearchResultItem"
// import {}


export default function SearchResults({filteredAntiques}){
 console.log(filteredAntiques,"SearchResult Orig")
    const filtered = filteredAntiques?.map(antique => {
    console.log(antique,"map SearchFRESULTS")
        return
    <SearchResultItem key={antique.id} antique={antique}/>}
    )
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