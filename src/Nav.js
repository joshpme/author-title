import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {faHeading} from "@fortawesome/free-solid-svg-icons/faHeading";
import {faUserFriends} from "@fortawesome/free-solid-svg-icons/faUserFriends";
import {faBuilding} from "@fortawesome/free-solid-svg-icons/faBuilding";
import {faBuildingUser} from "@fortawesome/free-solid-svg-icons/faBuildingUser";
import {faFileExport} from "@fortawesome/free-solid-svg-icons/faFileExport";

function Nav() {
    return (
        <div className={"bg-blue-700 hidden xl:block"}>
            <div className="container mx-auto px-3">
                <ol className="grid grid-cols-6 text-blue-50">
                    <li className={"flex -mr-4"}>
                        <div className={"bg-blue-50 text-black p-4 text-center grow"}>
                            <FontAwesomeIcon fixedWidth={true} icon={faSearch}/> Find paper
                        </div>
                        <div className={"h-0 w-0 border-[28px] border-transparent border-l-blue-50 grow-0"}>

                        </div>
                    </li>
                    <li className={"p-4 text-center"}>
                        <span>
                            <FontAwesomeIcon fixedWidth={true} icon={faHeading}/> Paper Title
                        </span>
                    </li>
                    <li className={"p-4 text-center"}>
                        <span>
                            <FontAwesomeIcon fixedWidth={true} icon={faUserFriends}/> Authors
                        </span>
                    </li>
                    <li className={"p-4 text-center"}>
                        <span>
                            <FontAwesomeIcon fixedWidth={true} icon={faBuilding}/> Organisations
                        </span>
                    </li>
                    <li className={"p-4 text-center"}>
                        <span>
                            <FontAwesomeIcon fixedWidth={true} icon={faBuildingUser}/> Affiliations
                        </span>
                    </li>
                    <li className={"p-4 text-center"}>
                        <span>
                             <FontAwesomeIcon fixedWidth={true} icon={faFileExport}/> Export
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    )
};

export default Nav;