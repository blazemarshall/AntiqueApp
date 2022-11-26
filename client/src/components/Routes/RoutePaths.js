import { Route, Routes } from "react-router";
import AntiqueTable from "../ATable/AntiqueTable";
import EditAntique from "../EditAntique/EditAntique";
import AddAntique from "../NewAntique/AddAntique";
import NotFound from "../NotFound";
import SingleAntique from "../SingleAntique/SingleAntique";

export default function RoutePaths({antiques,searchClicked}){
    return(
        <Routes >
        <Route exact path="/" element={<AntiqueTable searchClicked={searchClicked} antiques={antiques} />} />
        <Route exact path="/antiques/add-antique" element={<AddAntique />} />
        <Route exact path='/antiques/:id/edit-antique' element={<EditAntique />} />
        <Route exact path="/antiques" element={<AntiqueTable antiques={antiques} searchClicked={searchClicked} />} />
        <Route path='/antiques/:id' element={<SingleAntique  />} />
        <Route exact path="*" element={<NotFound  />} />
      </Routes>
    )
}