import {useEffect, useState} from "react";
import Affiliation from "./Affiliation";

function Author(props) {
    const [firstName, setFirstName] = useState(props.author.firstName ?? "");
    const [lastName, setLastName] = useState(props.author.lastName ?? "");
    const [type, setType] = useState(props.author.type ?? 'author');
    const [affiliations, setAffiliations] = useState(props.author.affiliations ?? []);
    useEffect(() => {
        props.setAuthors((authors) => {
            const newAuthors = [...authors];
            newAuthors[props.index] = {
                firstName: firstName,
                lastName: lastName,
                affiliations: affiliations
            };
            return newAuthors;
        });
    }, [firstName, lastName]);

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
                <div className={"flex-auto"}>
                    <div>
                        <label>First Name</label>
                        <input type={"text"} onChange={(e) => setFirstName(e.target.value)} value={firstName}
                               className={"form-input"}/>
                    </div>

                    <div className={"flex items-center gap-4"}>
                        <label className={"flex items-center gap-2"}>
                            <span>Author</span>
                            <input type={"radio"} value={"author"} onChange={(e) => setType(e.target.value)}
                                   checked={type === 'author'}/>
                        </label>
                        <label className={"flex items-center gap-2"}>
                            <span>Co-Author</span>
                            <input type={"radio"} value={"co-author"} onChange={(e) => setType(e.target.value)}
                                   checked={type === 'co-author'}/>

                        </label>
                    </div>
                </div>
                <div className={"flex-auto"}>
                    <label>Last Name</label>
                    <input type={"text"} onChange={(e) => setLastName(e.target.value)} value={lastName}
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
