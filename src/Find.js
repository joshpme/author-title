import {useSelector, useDispatch} from 'react-redux'
import {changeConference} from "./findReducer";
import {fetchConferences} from "./conferenceLookup";

function Find() {
    const findState = useSelector((state) => state.find)
    const dispatch = useDispatch()

    if (findState.conferenceLookupStatus === 'idle') {
        dispatch(fetchConferences())
    }

    return (
            <div className="container mx-auto my-3.5 px-3">
                <div className={"xl:my-10"}>
                    <h2 className={"text-2xl font-medium"}>Step 1: Find paper</h2>
                    <div>
                        <div className={"my-4"}>
                            <label>
                                <div className="mb-2 font-medium text-gray-900">Conference</div>
                                <div>
                                    <select onChange={(e) => dispatch(changeConference(e.target.value))}
                                            className={"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"}>
                                        {findState.conferences.map((conference) => (
                                            <option key={conference.ID}>{conference.Name}</option>
                                        ))}
                                    </select>
                                </div>
                            </label>
                        </div>

                        <div className={"my-4"}>
                            <label>
                                <div className="mb-2 font-medium text-gray-900">Paper Code</div>
                                <div><input type={"text"} id={"code"}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                                            placeholder={"TUPA071"}/></div>
                            </label>
                        </div>

                        <button
                            className={"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"}>Fetch
                        </button>
                    </div>
                </div>
            </div>
    );
}

export default Find;
