let count = 0
const url = "https://counter-beryl-kappa.vercel.app/add";

let sv;


async function get() {
    const response = await fetch(url);
    const counter = await response.json();
    sv = counter[0].count;
    document.getElementById("saving").innerText = sv
}

get();

function increment() {
    count = count + 1
    document.getElementById("count-el").innerText = count
}
function save() {
    if (count == 0) return;
    sv = sv + count + " - "
    count = 0;
    document.getElementById("count-el").innerText = count
    document.getElementById("saving").innerText = sv
    const data = { "count": sv };
    const jsdata = JSON.stringify(data);
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsdata
    };
    fetch(url, options)
}






console.log("ho")