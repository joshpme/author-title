import {useSelector, useDispatch} from 'react-redux'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {changePage} from "../State/navReducer";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons/faAngleLeft";

function Export() {
    const state = useSelector(state => state.paper);
    const dispatch = useDispatch()

    return (
        <div className={"xl:my-10"}>
            <div className={"container mx-auto my-3.5 px-3"}>
                <h2 className={"text-2xl font-medium"}>Final Step: Export</h2>
                <div className={"my-4"}>

                </div>

                <div className={"flex gap-2"}>
                    <button type={"button"} className={"default"}
                            onClick={(e) => dispatch(changePage('affiliations'))}>
                        <FontAwesomeIcon icon={faAngleLeft} fixedWidth/>{' '}Back
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Export;
