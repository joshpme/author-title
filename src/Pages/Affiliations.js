import {useSelector, useDispatch} from 'react-redux'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {changePage} from "../State/navReducer";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons/faAngleRight";

function Affiliations() {
    const state = useSelector(state => state.paper);
    const dispatch = useDispatch()

    return (
        <div className={"xl:my-10"}>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(changePage('export'))
            }}>
                <div className={"container mx-auto my-3.5 px-3"}>
                    <h2 className={"text-2xl font-medium"}>Step 5: Affiliations</h2>
                    <div className={"my-4"}>

                    </div>

                    <div className={"flex gap-2"}>
                        <button type={"button"} className={"default"} onClick={(e) => dispatch(changePage('organisations'))}>
                            <FontAwesomeIcon icon={faAngleLeft} fixedWidth />{' '}Back
                        </button>
                        <button type={"submit"} className={"primary"}>Next
                            <FontAwesomeIcon icon={faAngleRight} fixedWidth />
                        </button>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default Affiliations;
