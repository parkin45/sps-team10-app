
// const jikanjs  = require(['jikanjs']); // Uses per default the API version 3
// module.exports = jikan;

function handleErrors(response) {//in case etch malfunctions
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

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
}
/** I just laid the framwork and made this function the onclick for the 'click me' randomize button ---Nikita */

/** Creates an <li> element containing text. */
function createListElement(text) {
    const liElement = document.createElement('li');
    liElement.innerText = text;
    return liElement;
}
/** added this bc it might help lol ---Nikita */