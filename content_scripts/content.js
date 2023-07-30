const target = document.querySelector("html");
const targetText = "answer";
const replaceText = "ATYALAMACHA";

const recur = (elem) => {
    Array.from(elem.childNodes).forEach((e, idx) => {
        if (e.nodeType === e.TEXT_NODE) {
            if (e.nodeValue.match(targetText)) {
                //console.log("MATCHED");
                //let modifiedText = e.nodeValue.replace(new RegExp(`\\b${targetText}\\b`,"gi"), "GREAT");
                let splittedString = e.nodeValue.split(targetText);
                const spanElem = document.createElement("span");
                //console.log(splittedString);
                for (let idx in splittedString) {
                    let split = splittedString[idx];
                    spanElem.appendChild(document.createTextNode(split));
                    if (idx == splittedString.length - 1) {
                        //example : 'answer'ed and targetText = answer
                        //answered -> splittedString = ['','ed]
                        continue;
                    }
                    let spanChild = document.createElement("span");
                    spanChild.appendChild(document.createTextNode(replaceText));
                    spanChild.style.setProperty("background", "yellow");
                    spanElem.appendChild(spanChild);
                }
                //elem.style.background = "yellow";
                //console.log(spanElem);
                elem.replaceChild(spanElem, e);
            }
        }
        //console.log(e,elem.childNodes.length)
        if (e.nodeType === e.ELEMENT_NODE) {
            recur(e);
        }
    });
};
recur(target);
