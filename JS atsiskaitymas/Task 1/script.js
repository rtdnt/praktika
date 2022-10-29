/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.querySelector("form").addEventListener("submit", (e) => { // When the form is submitted, the function is executed

    e.preventDefault(); // this prevents the reload of the page

    let weightInKilograms = document.getElementById("search").value; // value is assigned to the number customer enters

    document.getElementById("output").style.visibility = "visible"; // opens the div tag (below) with style
    
    document.getElementById("svarai").innerHTML = weightInKilograms * 2.2046; // calculates and assigns value in pounds
    document.getElementById("gramai").innerHTML = weightInKilograms / 0.0010000; // calculates and assigns value in grams 
    document.getElementById("uncijos").innerHTML = weightInKilograms * 35.274; // calculates and assigns the value in ounces
});