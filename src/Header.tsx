import {Link} from "react-router-dom";

export default function header() {

    return (

        <>
            <p className="header"><Link to={"/"}>Home</Link></p>
            <p className="header"><Link to={"/welcome"}>Welcome</Link></p>
            <p className="header"><Link to={"/characters"}>Characters</Link></p>
        </>
    )
}