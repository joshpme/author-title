import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {faHeading} from "@fortawesome/free-solid-svg-icons/faHeading";
import {faUserFriends} from "@fortawesome/free-solid-svg-icons/faUserFriends";
import {faBuilding} from "@fortawesome/free-solid-svg-icons/faBuilding";
import {faBuildingUser} from "@fortawesome/free-solid-svg-icons/faBuildingUser";
import {faFileExport} from "@fortawesome/free-solid-svg-icons/faFileExport";
import {useSelector} from "react-redux";

function Nav() {
    const navState = useSelector((state) => state.nav)
    const page = navState.page

    const isCurrent = (pageName) => {
        return page === pageName ? "active" : ""
    }

    return (
        <div className={"bg-blue-700 hidden xl:block"}>
            <div className="container mx-auto px-3">
                <ol className="nav">
                    <li className={`${isCurrent("find")}`}>
                        <div>
                            <FontAwesomeIcon fixedWidth={true} icon={faSearch}/> Find paper
                        </div>
                    </li>
                    <li className={`${isCurrent("title")}`}>
                        <div>
                            <FontAwesomeIcon fixedWidth={true} icon={faHeading}/> Paper Title
                        </div>
                    </li>
                    <li className={`${isCurrent("authors")}`}>
                        <div>
                            <FontAwesomeIcon fixedWidth={true} icon={faUserFriends}/> Authors
                        </div>
                    </li>
                    <li className={`${isCurrent("organisations")}`}>
                        <div>
                            <FontAwesomeIcon fixedWidth={true} icon={faBuilding}/> Organisations
                        </div>
                    </li>
                    <li className={`${isCurrent("affiliations")}`}>
                        <div>
                            <FontAwesomeIcon fixedWidth={true} icon={faBuildingUser}/> Affiliations
                        </div>
                    </li>
                    <li className={`${isCurrent("export")}`}>
                        <div>
                             <FontAwesomeIcon fixedWidth={true} icon={faFileExport}/> Export
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    )
};

export default Nav;