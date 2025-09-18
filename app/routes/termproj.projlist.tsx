import { myTermProject } from "./data/termProject";
import { Link } from "@remix-run/react";

function Termproj () {
    return (
        <div>
                <p>
                    {
                        myTermProject.map((tpObj, index) =>
                        <li key={index}>
                        โปรเจควิชา {tpObj.tpTitle}
                        <Link to={'/termproj/proj/$tpObj.tpId'}>View</Link>
                        </li>
                        )
                    }
                </p>
        </div>
    );
}

export default Termproj;