function highlightSelection() {
    const selection = window.getSelection();
    const selectedText = selection.toString();
    const color = document.getElementById("colorSelect").value;

    if (!selectedText) {
        alert("Bitte markiere einen Textabschnitt.");
        return;
    }

    const range = selection.getRangeAt(0);
    const span = document.createElement("span");
    span.style.backgroundColor = color;
    span.textContent = selectedText;

    range.deleteContents();
    range.insertNode(span);
    selection.removeAllRanges();
}

