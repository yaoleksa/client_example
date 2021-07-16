const req = new XMLHttpRequest();
const p = document.createElement('p');

document.body.appendChild(p);

const state = {
    0: 'UNSENT',
    1: 'OPENED',
    2: 'HEADERS_RECEIVED',
    3: 'LOADING',
    4: 'DONE'
}

req.onreadystatechange = (event) => {
    p.innerHTML = state[req.readyState];
}

req.onerror = (event) => {
    console.log(event);
}

req.onload = (event) => {
    p.innerHTML = req.response;
}

req.open('POST', 'http://localhost:5000');
req.setRequestHeader('Content-Type', 'text/plain');
req.send('msg');