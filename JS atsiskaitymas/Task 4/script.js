/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT) // fetching the data from the endpoint
    .then((res) => res.json())
    .then((data) => {
        let list = document.getElementById("output").appendChild(document.createElement('ul')); // creates an unordered list as a base for the content
        return data.map((carList) => { // su map visi duomenys mappinami, kad butu lengviau juos valdyti
            ul = document.createElement("ul"); // the data is mapped in order to have better control of how to use it

            for (let model of carList.models) { // takes all car models and they are assigned to list items and all list items are added to unordered list.
                let li = document.createElement("li");
                li.innerHTML = model;
                ul.appendChild(li);
            }
            
            li = document.createElement('li'); // creates list items in html document and assigns them
            span = document.createElement('span');
            span.innerText = `${carList.brand}`; // car name is assigned to span
            li.appendChild(span); // span and car model list are placed to the list
            list.appendChild(li);
            li.appendChild(ul);
        })
  })
  .catch((error) => {
    console.log(error); // logs errors if there are any
  });
