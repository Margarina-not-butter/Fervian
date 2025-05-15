function showPopup(title, message, callback, classes) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    const popupHTML = `
        <div class="window popup-window ${classes}">
            <div class="title-bar">
                <div class="title-bar-text">${title}</div>
            </div>
            <div class="window-body">
                ${message}
                <button class="default">OK</button>
            </div>
        </div>
    `;

    overlay.innerHTML = popupHTML;

    document.body.appendChild(overlay);

    const popup = overlay.querySelector('.window');

    const okButton = overlay.querySelector('.default');
    okButton.addEventListener('click', function() {
        if (typeof callback === 'function') {
            callback();
        }
        document.body.removeChild(overlay);
    });
}

document.querySelectorAll('table.interactive').forEach(element => {
    element.addEventListener('click', (event) => {
        const highlightedClass = 'sunken-highlighted';
        const isRow = element => element.tagName === 'TR' && element.parentElement.tagName === 'TBODY';
        const newlySelectedRow = event.composedPath().find(isRow);
        const previouslySelectedRow = Array.from(newlySelectedRow.parentElement.children).filter(isRow).find(element => element.classList.contains(highlightedClass));
        if (previouslySelectedRow && previouslySelectedRow !== newlySelectedRow) {
            previouslySelectedRow.classList.remove(highlightedClass);
        }
        if (newlySelectedRow) {
            newlySelectedRow.classList.add(highlightedClass);
        }
    });
});