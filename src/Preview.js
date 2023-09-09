import {useEffect, useState} from "react";

function Preview(props) {


    return (
        <div className={"preview grow"}>
            <div className={"title"}>{props.title}{props.funding && "*"}</div>
            <div className={"authors"}>
                {props.authors.map((author, index) => {
                    if (index !== 0)
                        return <span key={index}>, {author.firstName} {author.familyName}</span>
                    else
                        return <span key={index}>{author.firstName} {author.familyName}</span>
                })}
            </div>
            <div className={"paper-contents"}>
                <div className={"columns"}>
                    <div className={"abstract"}>
                        <h3 className={"italic text-lg"}>Abstract</h3>
                        {
                            props.abstract.split("\n").map(function (item, idx) {
                                return (
                                    <p key={idx}>
                                        {item}
                                    </p>
                                )
                            })
                        }
                    </div>
                    <div>
                    </div>
                </div>
            </div>

            {props.funding && <div className={"columns self-end "}>
                <div className={"footnotes"}>
                    <div className={"footnote-border"}></div>
                    <div>
                        <div className={"funding"}>* {props.funding}</div>
                    </div>
                </div>
            </div>}

        </div>
    )
}

export default Preview;