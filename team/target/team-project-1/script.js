
// const jikanjs  = require(['jikanjs']); // Uses per default the API version 3
// module.exports = jikan;

function handleErrors(response) {//in case etch malfunctions
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

<<<<<<< HEAD
function randomizeAnime() {
    //old temp list of anime
    // const msgList =
    //     ['demon slayer',
    //         'my hero academia',
    //         'fruits basket',
    //         'soul eater',
    //         'konosuba',
    //         'the disastarous life of saiki k',
    //         '¯\_(ツ)_/¯'];



    //jikan implementation
    var msgList = [];

    fetch('https://api.jikan.moe/v3/genre/anime/6/1').then(handleErrors).then(response => response.text())//fetch from data
        .then(text => {
            parsed = JSON.parse(text);
            listing = parsed.anime;
            listing.forEach(function(obj) {
                console.log(typeof obj.title);
                msgList.push(obj.title);
            }
            );
            console.log("Message list: ");

            // console.log(msgList);
            // console.log("Message length: ");
            // console.log(msgList.length);
            // console.log("Message 5th element: ");
            // console.log(msgList[5]);

            const msg = msgList[Math.floor(Math.random() * msgList.length)];
            const msgContainer = document.getElementById('random-container');
            createListElement(msg);
            msgContainer.innerText = msg;
            console.log(msg);
        });
=======
function randomizeAnime(){
//retrieve list of anime from api somehow
// const genres = jikanjs.loadGenre(anime).//theoretically will load genres
// console.log(genres);

//temp list of anime
const msgList =
        ['demon slayer',
            'my hero academia',
            'fruits basket',
            'soul eater',
            'konosuba',
            'the disastarous life of saiki k',
            '¯\_(ツ)_/¯'];

const msg = msgList[Math.floor(Math.random() * msgList.length)];
    const msgContainer = document.getElementById('random-container');
    createListElement(msg);
    msgContainer.innerText = msg;
    console.log(msg);
>>>>>>> ba2e68072d112b924bac716072c05700602e1375
}

/** this function will eventually give a list of animes that are similar to user input */
function anime(){
//retrieve list of anime from api somehow
// const genres = jikanjs.loadGenre(anime).//theoretically will load genres
// console.log(genres);

//temp list of anime
const msgList =
        ['demon slayer',
            'my hero academia',
            'fruits basket',
            'soul eater',
            'konosuba',
            'the disastarous life of saiki k',
            '¯\_(ツ)_/¯'];

const msg = msgList[Math.floor(Math.random() * msgList.length)];
    const msgContainer = document.getElementById('anime-container');
    createListElement(msg);
    msgContainer.innerText = msg;
    console.log(msg);
}

/** I just laid the framwork and made this function the onclick for the 'click me' randomize button ---Nikita */

/** Creates an <li> element containing text. */
function createListElement(text) {
    const liElement = document.createElement('li');
    liElement.innerText = text;
    return liElement;
}

/** login info */
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

