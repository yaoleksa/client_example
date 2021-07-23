const socket = new WebSocket();
const p = document.createElement('p');

document.body.appendChild(p);

const state = {
    0: 'UNSENT',
    1: 'OPENED',
    2: 'HEADERS_RECEIVED',
    3: 'LOADING',
    4: 'DONE'
}

socket.onerror = (event) => {
    p.innerHTML = state[socket.readyState];
    console.log(event);
}

socket.onopen = (event) => {
    const now = Date.now();
    p.innerHTML = state[socket.readyState];
    socket.send(`Connection is set at ${now.getDay()/now.getMonth(), now.getHours(),now.getMinutes()}`);
}

socket.onmessage = (event) => {
    p.innerHTML = state[socket.readyState];
    socket.send('msg');
}