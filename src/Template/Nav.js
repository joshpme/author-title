import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {faHeading} from "@fortawesome/free-solid-svg-icons/faHeading";
import {faUserFriends} from "@fortawesome/free-solid-svg-icons/faUserFriends";
import {faBuilding} from "@fortawesome/free-solid-svg-icons/faBuilding";
import {faBuildingUser} from "@fortawesome/free-solid-svg-icons/faBuildingUser";
import {faFileExport} from "@fortawesome/free-solid-svg-icons/faFileExport";
import {useDispatch, useSelector} from "react-redux";
import {changePage} from "../State/navReducer";

function Nav() {
    const navState = useSelector((state) => state.nav)
    const dispatch = useDispatch()
    const page = navState.page


    const isCurrent = (pageName) => {
        return page === pageName ? "active" : ""
    }

    const pages = ["find", "title", "authors", "organisations", "affiliations", "export"];

    const isBefore = (pageName) => {
        return pages.indexOf(pageName) < pages.indexOf(page)
    }

    const navClasses = (pageName) => {
        return `${isCurrent(pageName)} ${isBefore(pageName) ? "before" : ""}`
    }

    const backTo = (pageName) => {
        if (isBefore(pageName)) {
            dispatch(changePage(pageName))
        }
    }

    return (
        <div className={"bg-blue-700 hidden xl:block"}>
            <div className="container mx-auto px-3">
                <ol className="nav">
                    <li className={navClasses('find')} onClick={() => backTo('find')}>
                        <div>
                            <FontAwesomeIcon fixedWidth={true} icon={faSearch}/> Find paper
                        </div>
                    </li>
                    <li className={navClasses('title')} onClick={() => backTo('title')}>
                        <div>
                            <FontAwesomeIcon fixedWidth={true} icon={faHeading}/> Paper Title
                        </div>
                    </li>
                    <li className={navClasses('authors')} onClick={() => backTo('authors')}>
                        <div>
                            <FontAwesomeIcon fixedWidth={true} icon={faUserFriends}/> Authors
                        </div>
                    </li>
                    <li className={navClasses('organisations')} onClick={() => backTo('organisations')}>
                        <div>
                            <FontAwesomeIcon fixedWidth={true} icon={faBuilding}/> Organisations
                        </div>
                    </li>
                    <li className={navClasses('affiliations')} onClick={() => backTo('affiliations')}>
                        <div>
                            <FontAwesomeIcon fixedWidth={true} icon={faBuildingUser}/> Affiliations
                        </div>
                    </li>
                    <li className={navClasses('export')}>
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