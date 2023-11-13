const urlInput: HTMLInputElement = document.getElementById('docurl')! as HTMLInputElement;
const formElement: HTMLFormElement = document.getElementById('form')! as HTMLFormElement;
const renderFrame: HTMLIFrameElement = document.getElementById('renderFrame')! as HTMLIFrameElement;

function isValidURL(test: string): boolean {
    let url: URL;
    try {
        url = new URL(test);
    } catch {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}

function buildIFrameURL(docUrl: string): string {
    return `https://docs.google.com/gview?url=${docUrl}&embedded=true`
}

formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!isValidURL(urlInput.value)) return alert("Invalid URL");

    const url = new URL(urlInput.value);
    const renderUrl = buildIFrameURL(url.toString());

    renderFrame.src = renderUrl;
})