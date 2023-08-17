import {useEffect, useState} from "react";

function Author(props) {
    const [name, setName] = useState(props.name);
    useEffect(() => {
        props.setAuthors((authors) => {
            const newAuthors = [...authors];
            newAuthors[props.index] = {name: name };
            return newAuthors;
        });
    }, [name]);

    const removeAuthor = () => {
        props.setAuthors((authors) => {
            const newAuthors = [...authors];
            newAuthors.splice(props.index, 1);
            return newAuthors;
        });
    }

    return (
        <div className={"my-2"}>
            <div className={"flex gap-4"}>
                <div>
                    <label>First Name</label>
                    <input type={"text"} onChange={(e) => setFirstName(e.target.value)} value={firstName}
                           className={"form-input"}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type={"text"} onChange={(e) => setLastName(e.target.value)} value={lastName}
                           className={"form-input"}/>
                </div>
                <div>

                </div>
                <div>
                    <button type={"button"} className={"removeButton"} onClick={removeAuthor}>x</button>
                </div>
            </div>

        </div>
    );
}

export default Author;
