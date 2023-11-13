var urlInput = document.getElementById('docurl');
var formElement = document.getElementById('form');
var renderFrame = document.getElementById('renderFrame');
function isValidURL(test) {
    var url;
    try {
        url = new URL(test);
    }
    catch (_a) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
}
function buildIFrameURL(docUrl) {
    return "https://docs.google.com/gview?url=".concat(docUrl, "&embedded=true");
}
formElement.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!isValidURL(urlInput.value))
        return alert("Invalid URL");
    var url = new URL(urlInput.value);
    var renderUrl = buildIFrameURL(url.toString());
    renderFrame.src = renderUrl;
});
