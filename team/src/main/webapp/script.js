
// const jikanjs  = require(['jikanjs']); // Uses per default the API version 3
// module.exports = jikan;

function handleErrors(response) {//in case etch malfunctions
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

/*
TODO: 
- find better link for randomize anime (probably most suggested?)
- make function to pull recomended from suggested anime (randomize anime. It's a matter of finding a link)
- probably need to pull from list of all of mal's anime for dropdown function (once again, finding a link)
 */

function randomizeAnime() {
    //jikan implementation
    var msgList = [];
    //http://api.jikan.moe/v3/top/anime/1/upcoming
    //demon example: https://api.jikan.moe/v3/genre/anime/6/1

    fetch('https://api.jikan.moe/v3/top/anime/1/upcoming').then(handleErrors).then(response => response.text())//fetch from data
        .then(text => {
            parsed = JSON.parse(text);
            console.log(parsed);
  
            parsed.top.forEach(item =>{
                // console.log(item.title);
                 msgList.push(item.title);
            })
            
            // console.log("Message list: ");
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
}

/** this function will eventually give a list of animes that are similar to user input */
function anime(){

    //get user input. Link will be constructed based on that. name=animeGenre
    console.log("genre selected: ");
    // console.log(getElementById('animeGenre').value);
    // console.log(document.getElementById('dropdown').value);
    var e = document.getElementById("dropdown");
    var genre = e.options[e.selectedIndex].value;
    console.log(genre);

//jikan implementation
    var msgList = [];

//link in following line will need to be constructed, of sorts from a dropdown of genres
//http://api.jikan.moe/v3/top/anime/1?recommendations=

    fetch('https://api.jikan.moe/v3/top/anime/1?recommendations=').then(handleErrors).then(response => response.text())//fetch from data
        .then(text => {
            parsed = JSON.parse(text);
            console.log(parsed);
  
            parsed.top.forEach(item =>{
                // console.log(item.title);
                 msgList.push(item.title);
            })
            
            // console.log("Message list: ");
            // console.log(msgList);
            // console.log("Message length: ");
            // console.log(msgList.length);
            // console.log("Message 5th element: ");
            // console.log(msgList[5]);

            const msg = msgList[Math.floor(Math.random() * msgList.length)];
            const msgContainer = document.getElementById('anime-container');
            createListElement(msg);
            msgContainer.innerText = msg;
            console.log(msg);
        });
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

