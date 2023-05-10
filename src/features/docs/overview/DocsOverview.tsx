import Icon from "@/components/Icon";
import { useEffect, useState } from "react";

enum KeyCode {
    Enter = "Enter"
}

const DocsOverview = () => {
    const [hura, setHura] = useState<any>(null);

    useEffect(() => {
        const hura = document.querySelector("#hura");
        const editor = document.querySelector("#editor");
        setHura({ hura, editor });
    }, []);
    function onKeyDown(event?: any) {
        console.log(event);

        if (event.which !== 13) return true;

        const docFragment = document.createDocumentFragment();

        //add a new line
        // docFragment.appendChild(document.createTextNode("\n"));

        //add the br, or p, or something else
        const newEle2 = document.createElement("p");
        newEle2.innerText = "Hellooo";
        docFragment.appendChild(newEle2);

        //make the br replace selection
        const range = window.getSelection()?.getRangeAt(0);
        range?.deleteContents();
        range?.insertNode(docFragment);

        //create a new range
        const range2 = document.createRange();
        range2.setStartAfter(newEle2);
        range2.collapse(true);

        //make the cursor there
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range2);

        return false;

        // if (event?.code === KeyCode.Enter) {
        //     document.execCommand("insertHTML", false, "<br><p>Hellooo</p><br>");
        //     // prevent the default behaviour of return key pressed
        //     return false;
        // }
    }
    // function onInput(event?: any) {
    //     console.log(event);
    //     hura.editor.innerHtml = '<div class="input-text"><br></div>';
    //     if (event?.code === KeyCode.Enter) {
    //         console.log("enter pressed");
    //         console.log("new >>>> ", hura.editor);
    //     }
    // }
    return (
        <div className="container container-horizontal" style={{ position: "relative" }}>
            <div className="editor-container">
                <div className="section">
                    <h1 className="title">
                        <div className="editor-wrapper">
                            <div
                                contentEditable
                                translate="no"
                                // 1. TODO: Uncomment when implementing show 'Undefined title' on empty state
                                // data-placeholder="Untitled item"
                                data-gramm="false"
                                spellCheck
                                className="title-editor editor"
                            />
                            {/* 1. TODO: As well as this */}
                            {/* <div className="untitled" /> */}
                        </div>
                    </h1>
                </div>
                <div className="section grow">
                    <div className="editor-wrapper">
                        <div
                            id="editor"
                            contentEditable
                            className="content editor"
                            // onInput={onInput}
                            onKeyDown={onKeyDown}
                        />
                    </div>
                </div>
            </div>
            <div className="structure-wrapper">
                <div style={{ paddingLeft: 14 }}>
                    <Icon name="chevron-left" />
                    <small>outline</small>
                </div>
                <ul className="structure">
                    <li className="h1">
                        <a href="#" className="active">
                            <div className="hw">Title H1</div>
                        </a>
                    </li>
                    <li className="h2">
                        <a href="#">
                            <div className="hw">Title H2</div>
                        </a>
                    </li>
                    <li className="h3">
                        <a href="#">
                            <div className="hw">Title H3</div>
                        </a>
                    </li>
                    <li className="h1">
                        <a href="#">
                            <div className="hw">Title H1</div>
                        </a>
                    </li>
                    <li className="h1">
                        <a href="#">
                            <div className="hw">Title H1</div>
                        </a>
                    </li>
                    <li className="h2">
                        <a href="#">
                            <div className="hw">Title H2</div>
                        </a>
                    </li>
                    <li className="h3">
                        <a href="#">
                            <div className="hw">Title H3</div>
                        </a>
                    </li>
                    <li className="h3">
                        <a href="#">
                            <div className="hw">Title H3</div>
                        </a>
                    </li>
                    <li className="h2">
                        <a href="#">
                            <div className="hw">Title H2</div>
                        </a>
                    </li>
                    <li className="h2">
                        <a href="#">
                            <div className="hw">Title H2</div>
                        </a>
                    </li>
                </ul>
            </div>
            <div id="hura">+</div>
        </div>
    );
};

export default DocsOverview;
