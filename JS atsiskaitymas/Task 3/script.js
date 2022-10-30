/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

document.getElementById("btn").addEventListener("click", () => { // Function starts when the button is clicked
    fetch(ENDPOINT) // fetches the data from the URL
        .then((response) => response.json()) 
        .then((data) => {
            let list = document.getElementById("output").appendChild(document.createElement('ul')); // unordered list is created
            document.getElementById('message').style.display = "none"; // hides the message ("Press "Show Users" button to see users")
            return data.map((user) => { // the data is mapped in order to have better control of how to use it
                li = document.createElement('li'); // creates the needed tags and assigns them
                img = document.createElement('img');
                span = document.createElement('span');
                img.src = user.avatar_url; // user image is assigned to the "source" of img tag
                img.alt = "github user avatar"
                span.innerHTML = `${user.login}`; // username is assigned to span
                li.appendChild(img); // both previously mentioned elements (img and span) are added to li
                li.appendChild(span);
                list.appendChild(li); // all list items are added to the list
    
        })
      })
      .catch((error) => {
        console.log(error); // logs if there are any errors 
      })})