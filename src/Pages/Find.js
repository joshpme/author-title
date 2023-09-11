import {useSelector, useDispatch} from 'react-redux'
import {changeConference, changePaperCode} from "../State/findReducer";
import {fetchConferences, fetchPaper} from "../Services/indico";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons/faCircleNotch";

function Find() {
    const findState = useSelector((state) => state.find)
    const dispatch = useDispatch()

    if (findState.conferenceLookupStatus === 'idle') {
        dispatch(fetchConferences())
    }

    const params = {
        conference: findState.selectedConference,
        code: findState.paperCode
    }

    return (
        <form className="container mx-auto my-3.5 px-3" onSubmit={
            (e) => {
                e.preventDefault()
                dispatch(fetchPaper(params))
            }
        }>
            <div className={"xl:my-10"}>
                <h2 className={"text-2xl font-medium"}>Step 1: Find paper</h2>
                <div>
                    <div className={"my-4"}>
                        <label>
                            <div className="mb-2 font-medium text-gray-900">Conference</div>
                            <div>
                                <select
                                    defaultValue={""}
                                    onChange={(e) => dispatch(changeConference(e.target.value))}
                                    className={"input-field"}
                                    required>
                                    <option value={""} disabled>Select a conference</option>
                                    {findState.conferences.map((conference) => (
                                        <option key={conference.ID} value={conference.ID}>{conference.Name}</option>
                                    ))}
                                </select>
                            </div>
                        </label>
                    </div>

                    <div className={"my-4"}>
                        <label>
                            <div className="mb-2 font-medium text-gray-900">Paper Code</div>
                            <div>
                                <input required
                                       type={"text"}
                                       id={"code"}
                                       className={"input-field"}
                                       placeholder={"TUPA071"}
                                       onChange={(e) => dispatch(changePaperCode(e.target.value))}
                                />
                            </div>
                        </label>
                    </div>

                    <button className={"primary"}
                            type={"submit"}
                            disabled={findState.findStatus === 'fetching'}>
                        {findState.findStatus === 'fetching' ?
                            <>
                                <FontAwesomeIcon icon={faCircleNotch} spin fixedWidth />{' '}
                                Fetching...
                            </>:
                            'Find'
                        }
                    </button>

                    {findState.findStatus === 'failed' &&
                        <div className={"text-red-500 mt-2"}>{findState.error}</div>
                    }
                </div>
            </div>
        </form>
    );
}

export default Find;
