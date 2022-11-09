import { Link } from "react-router-dom";

export default function NameLink({children,link}){
    return (
        <Link to={link} className="NameLink">{children}</Link>
    )
}