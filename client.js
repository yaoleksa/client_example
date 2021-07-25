const req = new XMLHttpRequest();
const btnPost = document.querySelectorAll('button')[0];
const btnGet = document.querySelectorAll('button')[1];
const text = document.querySelectorAll('textarea')[0];
const url = 'http://localhost:5000';

let method;

req.onerror = (event) => {
    text['placeholder'] = 'Error has occured. Connection with server not set.';
    console.log(event);
}

btnGet.addEventListener('click', function (event){
    method = 'GET';
    req.open(method, url);
    req.send();
    text.value = req.response;
    console.log(req.response);
})

btnPost.addEventListener('click', function (event) {
    method = 'POST';
    req.open(method, url);
    req.send(text.value);
});