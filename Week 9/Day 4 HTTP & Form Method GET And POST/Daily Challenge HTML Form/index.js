document .querySelector("form") .addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const fontData = new FormData(document .querySelector("form"));  
    const entries = fontData.entries();
    const data = Object.fromEntries(entries);


    const dataString = JSON.stringify(data);
    const p = document.createElement("p");
    p.innerText = dataString;
    document.body.appendChild(p);
}