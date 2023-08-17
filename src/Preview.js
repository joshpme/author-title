import {useEffect, useState} from "react";

function Preview(props) {


    return (
        <div className={"preview grow"}>
            <div className={"title"}>{props.title}{props.funding && "*"}</div>
            <div className={"authors"}>
                {props.authors.map((author, index) => {
                    if (index !== 0)
                        return <span key={index}>, {author.firstName} {author.lastName}</span>
                    else
                        return <span key={index}>{author.firstName} {author.lastName}</span>
                })}
            </div>
            <div className={"paper-contents"}>
                <div className={"columns"}>
                    <div className={"abstract"}>
                        <h3 className={"italic text-lg"}>Abstract</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et orci
                            pharetra,
                            mollis lectus vitae, efficitur tellus. Sed eget magna convallis, vulputate massa
                            vel, viverra lectus. Etiam ac ligula lobortis, ullamcorper lacus vel, tempus
                            est.
                            Etiam hendrerit libero sit amet metus sagittis, eu efficitur neque mollis. Donec
                            at
                            nisl maximus, interdum elit eu, condimentum arcu. Orci varius natoque penatibus
                            et
                            magnis dis parturient montes, nascetur ridiculus mus. Proin finibus mauris
                            felis, et
                            dignissim sapien vestibulum quis. Aenean a magna lacinia, posuere ante nec,
                            porta
                            enim. Ut efficitur orci vel enim auctor, ut porta lectus hendrerit. In hac
                            habitasse
                            platea dictumst. Cras quis dolor eu nisl lacinia cursus. Pellentesque at erat
                            eget
                            eros sagittis egestas. Proin velit eros, fringilla eu velit eget, dignissim
                            viverra
                            sem. Vivamus congue erat a eros placerat, venenatis aliquet arcu sodales.
                        </p>
                    </div>
                    <div>
                        <p>Donec lacinia ipsum in nunc egestas mattis. Vivamus fringilla vestibulum massa et
                            feugiat. Proin tempus rhoncus velit at maximus. Duis velit ante, efficitur et
                            massa
                            quis, tincidunt rutrum justo. Aenean fermentum risus et dolor convallis, in
                            malesuada odio gravida. Suspendisse quis commodo arcu. Etiam est quam, consequat
                            nec
                            condimentum vel, tincidunt eu libero. Sed magna nunc, lobortis quis risus at,
                            venenatis euismod magna. Sed vehicula ex erat, eget sodales augue venenatis nec.
                            Nulla at tristique odio. Fusce metus eros, condimentum eget aliquet eu, luctus
                            condimentum velit.
                        </p>
                        <p>
                            Suspendisse magna lacus, semper id sem at, varius dapibus metus. Donec eget
                            imperdiet eros. Ut eleifend iaculis volutpat. Nulla facilisi. Vestibulum sed
                            urna
                            consequat, ullamcorper nulla eu, dignissim lacus. Vivamus ac tortor ac est
                            venenatis
                            accumsan a quis libero. Sed lorem nisi, vestibulum id eleifend dapibus,
                            scelerisque
                            at augue.
                        </p>
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