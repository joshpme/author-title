import {useEffect, useState} from "react";
import Affiliation from "./Affiliation";

function Author(props) {
    const [firstName, setFirstName] = useState(props.author.firstName ?? "");
    const [initial, setInitial] = useState(props.author.initial ?? "");
    const [familyName, setFamilyName] = useState(props.author.familyName ?? "");
    const [affiliations, setAffiliations] = useState(props.author.affiliations ?? []);
    const [displayOrder, setDisplayOrder] = useState(props.author.displayOrder ?? 0);

    useEffect(() => {
        props.setAuthors((authors) => {
            const newAuthors = [...authors];
            newAuthors[props.index] = {
                firstName: firstName,
                initial: initial,
                familyName: familyName,
                affiliations: affiliations
            };
            return newAuthors;
        });
    }, [firstName, familyName]);

    const removeAuthor = () => {
        props.setAuthors((authors) => {
            const newAuthors = [...authors];
            newAuthors.splice(props.index, 1);
            return newAuthors;
        });
    }

    const addAffiliation = () => {
        setAffiliations((affiliations) => {
            const newAffiliations = [...affiliations];
            affiliations.push({name: ''})
            return newAffiliations;
        })
    }

    return (
        <div className={"my-2"}>
            <div className={"flex gap-4"}>
                <div className={"w-16"}>
                    <div>
                        <label>#</label>
                        <input type={"text"} onChange={(e) => setDisplayOrder(e.target.value)} value={displayOrder}
                               className={"form-input"}/>
                    </div>
                </div>

                <div className={"w-32"}>
                    {props.displayType === 'short' && <div>
                        <label>Initial</label>
                        <input type={"text"} onChange={(e) => setInitial(e.target.value)} value={initial}
                               className={"form-input"}/>
                    </div>
                    }
                    {props.displayType === 'long' && <div>
                        <label>First Name</label>
                        <input type={"text"} onChange={(e) => setFirstName(e.target.value)} value={firstName}
                               className={"form-input"}/>
                    </div>
                    }
                </div>
                <div className={"flex-auto"}>
                    <label>Last Name</label>
                    <input type={"text"} onChange={(e) => setFamilyName(e.target.value)} value={familyName}
                           className={"form-input"}/>
                </div>
                <div className={"flex-auto"}>
                    <label>Affiliations</label>
                    <div>
                        {affiliations.map((affiliation, index) => {
                            return <Affiliation key={index} affiliation={affiliation} index={index}
                                                setAffiliations={setAffiliations}/>
                        })}
                        <button type={"button"} className={"addButton"} onClick={addAffiliation}>Add Affiliation
                        </button>
                    </div>
                </div>

            </div>
            <button type={"button"} className={"removeButton"} onClick={removeAuthor}>Remove Author</button>
        </div>
    );
}

export default Author;
