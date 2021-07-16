const req = new XMLHttpRequest();
const p = document.createElement('p');

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

document.body.appendChild(p);

req.open('POST', 'http://localhost:5000');

p.innerHTML = req.readyState;

req.setRequestHeader('Content-Type', 'text/plain');

req.onerror = (event) => {
    console.log(event);
}

req.send('msg');

const socket = new WebSocket('ws://localhost:3000');

socket.onopen = (event) => {
    socket.send('from socket');
}

socket.onmessage = (event) => {
    console.log(event);
}

socket.onerror = (event) => {
    p.innerHTML = 'Error has occured.';
    console.log(event);
}