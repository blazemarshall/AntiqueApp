
import SearchResultItem from "./SearchResultItem"
export default function SearchResults({filteredAntiques}){
    const filtered = filteredAntiques?.map(antique => {
        return(
    <SearchResultItem key={antique.id} antique={antique}/>
    )})
    return (
        <div className="search-results-container">
            <table>
                <thead className="search-thead">
                    <tr className="search-tr-head">
                    <th className="search-th">Id</th>
                    <th className="search-th">Name</th>
                    <th className="search-th">Quantity</th>
                    <th className="search-th">Category</th>
                    <th className="search-th">Author</th>
                    <th className="search-th">Printed</th>
                    <th className="search-th">Genre</th>
                    <th className="search-th">Edition</th>
                    <th className="search-th">Publisher</th>
                    <th className="search-th">Type</th>

                    <th className="search-th">Value</th>
                    <th className="search-th">Purchase Price</th>
                    <th className="search-th">Sell Price</th>

                    <th className="search-th">Material</th>
                    <th className="search-th">Color</th>
                    <th className="search-th">Style</th>
                    <th className="search-th">Brand</th>
                    <th className="search-th">Model</th>
                    <th className="search-th">Time Period</th>
                    <th className="search-th">Condition</th>
                    <th className="search-th">Origin</th>
                    <th className="search-th">Purpose</th>
                    <th className="search-th">Owner</th>
                    <th className="search-th">History</th>
                    <th className="search-th">Size</th>
                    <th className="search-th">Comment</th>
                    </tr>
                </thead>
            {filtered}
            </table>
        </div>
    )
}