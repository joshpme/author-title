import {useEffect, useState} from "react";

function Affiliation(props) {
    console.log(props);
    const [name, setName] = useState(props.affiliation.name ?? '');

    useEffect(() => {
        props.setAffiliations((affiliations) => {
            const newAffiliations = [...affiliations];
            newAffiliations[props.index] = {name: name};
            return newAffiliations;
        });
    }, [name]);

    const removeAffiliation = () => {
        props.setAffiliations((affiliations) => {
            const newAffiliations = [...affiliations];
            newAffiliations.splice(props.index, 1);
            return newAffiliations;
        });
    }

    return (
        <div className={"mb-1"}>
            <div>
                <input type={"text"} onChange={(e) => setName(e.target.value)} value={name}
                       className={"form-input"}/>
            </div>
            <div className={"flex gap-2 justify-start"}>

                <button type={"button"} className={"removeButton"} onClick={removeAffiliation}>Remove Affiliation
                </button>
            </div>
        </div>
    );
}

export default Affiliation;
