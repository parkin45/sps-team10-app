
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
    var urlList = [];
    var image_urlList = [];

//link in following line will need to be constructed, of sorts from a dropdown of genres
//http://api.jikan.moe/v3/top/anime/1?recommendations=




//generate random page number too!
var page ; //pulls a number 0 to 100 i think
var lp;
var index;

//fetch last possible page
fetch('https://api.jikan.moe/v3/genre/anime/'+genre+'/1').then(handleErrors).then(response => response.text())//fetch from data
        .then(text => {
            parsed = JSON.parse(text);
            // console.log("last page: ");
            // console.log(parsed.last_page);
                // console.log("last page:")
                // console.log(parsed.last_page);
                lp = parsed.last_page;//get number out of all available pages
        

        page = Math.floor(Math.random() * lp);

        console.log("link:");
        console.log('https://api.jikan.moe/v3/genre/anime/'+genre+'/'+page);

    fetch('https://api.jikan.moe/v3/genre/anime/'+genre+'/'+page).then(handleErrors).then(response => response.text())//fetch from data
        .then(text => {
            parsed = JSON.parse(text);
            // console.log(parsed);
  
            parsed.anime.forEach(item =>{
                // console.log(item.title);
                 msgList.push(item.title);
                 
                 urlList.push(item.url);
                //  console.log("link:")
                //  console.log(item.url);

                 image_urlList.push(item.image_url);
                //  console.log("image link:")
                //  console.log(item.image_url);
            })
            
            // console.log("Message list: ");
            // console.log(msgList);
            // console.log("Message length: ");
            // console.log(msgList.length);
            // console.log("Message 5th element: ");
            // console.log(msgList[5]);

            index = Math.floor(Math.random() * msgList.length);
            const msg = msgList[index];
            const url = urlList[index];

            const msgContainer = document.getElementById('anime-container');
            const urlContainer = document.getElementById('anime-link');

            createListElement(msg);
            createListElement(url);
            msgContainer.innerText = msg;
            urlContainer.innerText = url;
            console.log(msg + "\n watch at: " + url);
        });
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

