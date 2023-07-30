const target = document.querySelector("html");

const recur = (elem) => {
    Array.from(elem.childNodes).forEach((e, idx) => {
        //console.log(e,e.nodeType, e.TEXT_NODE,e.textContent	 );

        if (e.nodeType === e.TEXT_NODE) {
            // console.log( e, e.textContent );
            //e.nodeValue = "oy"

            // if ( elem.classList.contains( "question-hyperlink" ) ) {
            // 	console.log("heading")
            // 	elem.style.background = "blue";
            // 	elem.style.color = "white"
            // }
			console.log(e.nodeValue)
            let modifiedText = e.nodeValue.replace(new RegExp(/answer/,"gi"), "GREAT");
			if ( e.nodeValue.includes("answer") ) {
				console.log("found answer")
				elem.style.background = "yellow";
				elem.replaceChild(document.createTextNode(modifiedText),e)
			}
        }
        //console.log(e,elem.childNodes.length)
        if (e.nodeType === e.ELEMENT_NODE) {
            recur(e);
        }
    });
};
recur(target);
