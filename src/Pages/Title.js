import {useSelector, useDispatch} from 'react-redux'
import {changeSpecialThanks, changeTitle} from "../State/paperReducer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWarning} from "@fortawesome/free-solid-svg-icons/faWarning";
import {changePage} from "../State/navReducer";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons/faAngleRight";

function Title() {
    const state = useSelector(state => state.paper);
    const dispatch = useDispatch()

    return (
        <div className={"xl:my-10"}>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(changePage('authors'))
            }}>
                <div className={"container mx-auto my-3.5 px-3"}>
                    <h2 className={"text-2xl font-medium"}>Step 2: Paper Title</h2>
                    <div className={"my-4"}>
                        <label>
                            <div className="mb-2 font-medium text-gray-900">Paper Title</div>
                            <div>
                                <input required
                                       type={"text"}
                                       value={state.paper.title}
                                       onChange={e => dispatch(changeTitle(e.target.value))}
                                       className={"input-field w-full"}
                                       placeholder={"Paper Title"}
                                />
                            </div>
                            {state.warnings.title && <div className={"text-red-500 my-1"}>
                                <FontAwesomeIcon icon={faWarning} fixedWidth/>{' '}
                                {state.warnings.title}
                            </div>}
                        </label>
                    </div>
                    <div className={"my-4"}>
                        <label>
                            <div className="mb-2 font-medium text-gray-900">Special Thanks (optional)</div>
                            <div>
                                <textarea
                                    onChange={e => dispatch(changeSpecialThanks(e.target.value))}
                                    className={"input-field w-full"}
                                    placeholder={"Funded by..."}
                                >{state.paper.specialThanks}</textarea>
                            </div>
                        </label>
                    </div>

                    <div className={"flex gap-2"}>
                        <button type={"button"} className={"default"} onClick={(e) => dispatch(changePage('find')) }>
                            <FontAwesomeIcon icon={faAngleLeft} fixedWidth/>{' '}Back
                        </button>
                        <button type={"submit"} className={"primary"}>Next
                            <FontAwesomeIcon icon={faAngleRight} fixedWidth/>
                        </button>
                    </div>
                </div>


            </form>
        </div>

    );
}

export default Title;
