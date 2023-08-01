const targetTextInputElem = document.querySelector("#targetText-input");
const replacementTextInputElem = document.querySelector("#replaceText-input");
const submitBtn = document.querySelector("#submit-btn");
const form = document.querySelector("#form");
const checkbox = document.querySelector("#extensionActive-checkbox");
const msgElem = document.querySelector("#info-p");

const performReplaceText = async (targetText, replacementText) => {
    const [tab] = await chrome.tabs.query({
        active: true,
        lastFocusedWindow: true,
    });
    const response = await chrome.tabs.sendMessage(tab.id, {
        action: "PERFORM_REPLACE_TEXT",
        targetText,
        replacementText,
    } );
    msgElem.textContent = "Successful!" 
    
};
form.addEventListener("submit", (e) => {
    e.preventDefault();
    msgElem.innerHtml = "";
    msgElem.textContent = "";
    const targetText = targetTextInputElem.value;
    const replacementText = replacementTextInputElem.value;
    console.log(replacementText)
    let warning = "";
    if (targetText.trim().length === 0) {
        warning = "target text cannot be empty!";
    }
    if (warning.length > 0) {
        const newWarningSpan = document.createElement("span");
        newWarningSpan.textContent = warning;
        msgElem.appendChild(newWarningSpan);
    }
    if (replacementText.trim().length === 0) {
        warning = "replacement text cannot be empty!";
    }
    console.log("warning : " + warning);
    if (warning.length > 0) {
        let newWarningSpan = document.createElement("span");
        newWarningSpan.textContent = warning;
        msgElem.appendChild(newWarningSpan);
    }

    performReplaceText(targetText,replacementText);
});
