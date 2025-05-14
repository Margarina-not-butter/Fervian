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