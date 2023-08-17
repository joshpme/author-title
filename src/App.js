import React, {useState} from "react";
import Author from "./Author";
import Preview from "./Preview";

function App() {
    const [title, setTitle] = useState("The First Room-Temperature Ambient-Pressure Superconductor")
    const [funding, setFunding] = useState("Authored by Jefferson Science Associates, LLC under U.S. DOE Con-tract No. DE-AC05-06OR23177. The U.S. Government retains a non-exclusive, paid-up, irrevocable, world-wide license to publish or repro-duce this manuscript for U.S. Government purposes.");
    const [authors, setAuthors] = useState([
        {
            type: 'author',
            firstName: "Sukbae",
            lastName: "Lee",
            affiliations: [
                { name: "Department of Physics, Korea University, Seoul, Korea" },
                { name: "ANSTO, NSW, Australia" }
            ]
        },
        {
            type: 'co-author',
            firstName: "Ji-Hoon",
            lastName: "Kim",
            affiliations: [
                { name: "Department of Physics, Korea University, Seoul, Korea" }
            ]
        },
        {
            type: 'co-author',
            firstName: "Young-Wan",
            lastName: "Kwon",
            affiliations: [
                { name: "Department of Physics, Korea University, Seoul, Korea" }
            ]
        }
    ]);

    return (
        <div className="wrapper">
            <div>
                <h1>Template Generator</h1>

                <div className={"section"}>
                    <h2>Title</h2>
                    <div className={"my-2"}>
                        <label>
                            Paper Title
                        </label>
                        <input type={"text"} onChange={(e) => setTitle(e.target.value)} value={title}
                               className={"form-input"}/>
                    </div>

                    <div className={"my-2"}>
                        <label>
                            Funding
                        </label>
                        <textarea onChange={(e) => setFunding(e.target.value)} value={funding}
                                  className={"form-input"}>
                    </textarea>
                    </div>
                </div>

                <div className={"section"}>
                    <h2>Authors</h2>
                    <div>
                        {authors.map(
                            (author, index) => {
                                return <Author key={index} author={author} index={index} setAuthors={setAuthors}/>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={"flex flex-col"}>
                <div className={"section grow-0"}>
                    <h2>Download Template</h2>
                    <div className={"downloads"}>
                        <button type={"button"} className={"downloadButton"}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width={32} height={32}>
                                <path
                                    d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"/>
                            </svg>
                            LaTeX
                        </button>
                        <button type={"button"} className={"downloadButton"}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width={32} height={32}>
                                <path
                                    d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"/>
                            </svg>
                            Word
                        </button>
                    </div>
                </div>
                <div className={"section flex flex-col grow"}>
                    <h2 className={"grow-0"}>Preview</h2>
                    <Preview title={title} funding={funding} authors={authors} />
                </div>
            </div>

        </div>
    );
}

export default App;
