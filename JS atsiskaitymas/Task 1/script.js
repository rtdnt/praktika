/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.querySelector("form").addEventListener("submit", (e) => { 

    e.preventDefault(); 

    let weightInKilograms = document.getElementById("search").value;

    document.getElementById("output").style.visibility = "visible";
    
    document.getElementById("svarai").innerHTML = weightInKilograms * 2.2046;
    document.getElementById("gramai").innerHTML = weightInKilograms / 0.0010000;
    document.getElementById("uncijos").innerHTML = weightInKilograms * 35.274;
});