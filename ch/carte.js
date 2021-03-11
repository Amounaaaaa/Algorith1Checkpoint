var heart = document.getElementsByClassName("fa-heart");

Array.from(heart).map(el => {
  el.addEventListener("click", () => {
    el.classList.toggle("like");
  });
});
/*Remouve Action*/
function remouve() {
  var myobj = document.getElementById("l1");

  myobj.remove();
  somme();
  
}



var incrimentButton = document.getElementsByClassName("up");
var decrimentButton = document.getElementsByClassName("down");

/**Inscrimentation  bloc -Begin*/
for (var i = 0; i < incrimentButton.length; i++) {
  var button = incrimentButton[i];
    button.addEventListener("click", function(event) {
    var buttonClicked = event.target;
    console.log(buttonClicked);
    var input = buttonClicked.parentElement.parentElement.children[2].children[0];
    console.log(input);
    var inputValue = input.value;
    console.log("inputValue", inputValue);
    var newValue = parseInt(inputValue) + 1;
    console.log("newValue", newValue);
    input.value = newValue;
    var price = buttonClicked.parentElement.parentElement.children[3];
    var price = price.innerText;
    console.log("price", price);
    console.log(price);
    SubTotal = newValue * price;
    var x = buttonClicked.parentElement.parentElement.children[4];
    console.log(x);
    x.innerHTML = SubTotal;
    console.log(x);
    console.log("Total", SubTotal);

    somme();
  });
}
/**Inscrimentation  bloc -End*/



/**Decrimentation  bloc -Begin*/

for (var a = 0; a < decrimentButton.length;a++) {
  var button = decrimentButton[a];
  button.addEventListener("click", function(event) {
    var buttonClicked = event.target;
    console.log(buttonClicked);
    var input = buttonClicked.parentElement.parentElement.children[2].children[0];
    console.log(input);
    var inputValue = input.value; 
    //4
    console.log("inputValue", inputValue);

    if (inputValue > 0) {
      
      var newValue = parseInt(inputValue) - 1;
      console.log("newValue", newValue);
      input.value = newValue;
      var price = buttonClicked.parentElement.parentElement.children[3];
      var price = price.innerText;
      console.log(price);
      SubTotal = newValue * price;
      var x = buttonClicked.parentElement.parentElement.children[4];
      console.log(x);
      x.innerHTML = SubTotal;
      console.log(x);
      console.log("Total", SubTotal);
    } else alert("Oooops !! La quantité doit être de valeur positive");
  
   somme()
  });
}
/**Decrimentation  bloc -End*/

 function somme(){
  var somme=document.getElementsByClassName("total");
  let somme1=0;

  for(let k=0;k<=somme.length;k++){
    console.log(k);
     somme1=somme1+parseInt(somme[k].innerText);
            var totalFinal=document.getElementById("card-footer");
     console.log(totalFinal);
     totalFinal.innerText='Total ='+somme1;

  }
 }











