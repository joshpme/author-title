import {useSelector, useDispatch} from 'react-redux'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {changePage} from "../State/navReducer";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons/faAngleRight";
import {changeAuthorStyle, changeTitle} from "../State/paperReducer";
import {faWarning} from "@fortawesome/free-solid-svg-icons/faWarning";

function Authors() {
    const state = useSelector(state => state.paper);
    const dispatch = useDispatch()

    return (
        <div className={"xl:my-10"}>
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(changePage('organisations'))
            }}>
                <div className={"container mx-auto my-3.5 px-3"}>
                    <h2 className={"text-2xl font-medium"}>Step 3: Authors</h2>
                    <div className={"my-4"}>
                        <div className="mb-2 font-medium text-gray-900">Author Style</div>
                        <div className="inline-flex items-center gap-2">
                            <label className="inline-flex items-center">
                                <input type="radio" className="form-radio" required name="authorStyle" value="initial"
                                       checked={state.paper.authorStyle === 'initial'}
                                       onChange={(e) => dispatch(changeAuthorStyle(e.target.value))}/>
                                <span className="ml-2">Initials</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input type="radio" className="form-radio" required name="authorStyle" value="full"
                                       checked={state.paper.authorStyle === 'full'}
                                       onChange={(e) => dispatch(changeAuthorStyle(e.target.value))}/>
                                <span className="ml-2">Full firstname</span>
                            </label>
                        </div>
                    </div>

                    <div className={"my-4"}>
                        <div className="mb-2 font-medium text-gray-900">Authors</div>
                        <div className="inline-flex items-center gap-2">
                            {state.paper.authors.map((author, index) =>
                                <input key={index} type={"text"} className={"input-field"}
                                        value={author.name}

                                       placeholder={`${state.paper.authorStyle === 'initial' ? 'P. Name' : 'Person Name'}`}
                                       required/>
                            )}
                        </div>
                    </div>

                    <div className={"flex gap-2"}>
                        <button type={"button"} className={"default"} onClick={(e) => dispatch(changePage('title'))}>
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

export default Authors;
