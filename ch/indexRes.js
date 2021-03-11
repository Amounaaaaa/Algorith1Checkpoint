var heart = document.getElementsByClassName("fa-heart");

Array.from(heart).map(el => {
  el.addEventListener("click", () => {
    el.classList.toggle("like");
  });
});

function remouve() {
  var myobj = document.getElementById("l1");

  myobj.remove();
  //updateTotal()
}
var incrimentButton = document.getElementsByClassName("up");
var decrimentButton = document.getElementsByClassName("down");
for (var i = 0; i < incrimentButton.length; i++) {
  var button = incrimentButton[i];
  button.addEventListener("click", function(event) {
    var buttonClicked = event.target;
    console.log(buttonClicked);
    var input =
      buttonClicked.parentElement.parentElement.children[2].children[0];
 
    var inputValue = input.value;
    var newValue = parseInt(inputValue) + 1;
    input.value = newValue;
    var price = buttonClicked.parentElement.parentElement.children[3];
    var price = price.innerText;
    let SubTotal = newValue * price;
    var subtotal = buttonClicked.parentElement.parentElement.children[4];
    console.log(subtotal);
    subtotal.innerHTML = SubTotal;
    console.log(subtotal);
    console.log("Total", SubTotal);
    var somme=document.getElementsByClassName("total");
    console.log(somme);
    let somme1=0;
    for(i=0;i<somme.length;i++){
     
       var somme=somme1+parseInt(somme[i].innerText)+parseInt(somme[i+1].innerText);
       
       console.log("somme",somme);
       var totalFinal=document.getElementById("card-footer");
       console.log(totalFinal);
       totalFinal.innerText='Total ='+somme;

    }
  });
}
for (var i = 0; i < decrimentButton.length; i++) {
  var button = decrimentButton[i];
  button.addEventListener("click", function(event) {
    var buttonClicked = event.target;
    console.log(buttonClicked);
    var input = buttonClicked.parentElement.parentElement.children[2].children[0];
    var inputValue = input.textContent; //5
    //4

    if (inputValue > 1) {
      var newValue = parseInt(inputValue) - 1;
      console.log("newValue", newValue);
      input.value = newValue;
      var price = buttonClicked.parentElement.parentElement.children[3];
      var price = price.innerText;
      console.log(price);
      Total = newValue * price;
      var x = buttonClicked.parentElement.parentElement.children[4];
      console.log(x);
      x.innerHTML = Total;
      console.log(x);
      console.log("Total", Total);
    } else alert("Oooops !! La quantité doit être de valeur positive");
  
    var somme=document.getElementsByClassName("total");
    let somme1=0;
  
    for(let k=0;k<=somme.length;k++){
      console.log(k);
       somme1=somme1+parseInt(somme[k].innerText);
              var totalFinal=document.getElementById("card-footer");
       console.log(totalFinal);
       totalFinal.innerText='Total ='+somme1;

    }
  });
}
function updateSubTotal() {
  //var ItemContainer=document.getElementsByClassName('col-md-6')[0]
  var row = document.getElementsByClassName("row")[0];
  //var total=0;
  // console.log(ItemContainer);
  console.log("row", row);
  /* for (var i=0;i<row.length;i++){
          row=row[i];*/
  var quantity = row.getElementsByClassName("quantity");
  var qte = quantity.value;

  console.log("here !", qte);
}

//  var quantity=document.getElementsByClassName("quantity");
// console.log(quantity);

/*function Down(){ 
    var up=document.getElementsByClassName("down");
    for (i=0;i<up.length;i++){
      var Add=up[i];
      console.log(Add);
    }
  console.log(up);
  
    }*/
////////////////////////////////////////////// code !!!!!

/*
    var up=document.getElementsByClassName("up");
    for (i=0;i<up.length;i++){
      var Add=up[i];
      console.log("btnActive",Add);
      Add.addEventListener("click",QuantityUp)
    
    function QuantityUp(){
      
      var inputQte=document.getElementsByClassName("input");
      for (i=0;i<inputQte.length;i++){
        console.log("inputQte",inputQte[i].value);


        //input=parseInt(inputQte[i].value)+1;
         var inputValue=inputQte[i].value;
         var newInput=parseInt(inputValue)+1;
         console.log(newInput);
         inputQte[i].value=newInput

*/

// input=parseInt(input)+1;
// console.log("res =",inputQte[i].value);

// inputQte[i].value=input
// }

// }

// }

/* var up=document.getElementsByClassName("down");
      for (i=0;i<up.length;i++){
        var Add=up[i];
        console.log("btnActive",Add);
        Add.addEventListener("click",QuantityUp)
      
      function QuantityUp(event){
        
        console.log("Vous ete ");
        var inputQte=document.getElementsByClassName("input");
        
        for (i=0;i<inputQte.length;i++){
          console.log("inputQte",inputQte[i].value);
          input=inputQte[i].value;
          if(isNaN(input)||input<=1){
            input.value=1
          }else
          input=parseInt(input)-1;

          console.log("res =",input);
          inputQte[i].value=input
  
        }
  
      }
      
        }*/

/*var qte = document.getElementsByClassName("quantity")[0];
var pu = document.getElementsByClassName("prix")[0];
console.log(pu);
console.log(qte);
quantite = qte[0].value;
console.log(quantite);

//Add.addEventListener('click',QuantityChanged)

function QuantityChanged() {
  console.log("cc");
}

/*var inputQantity=document.getElementsByClassName("quantity-input");
    console.log(inputQantity);
    for(i=0;i<inputQantity.length;i++){
      var input=inputQantity[i];
      console.log("inpuut",input);
      input.addEventListener('change',UPQuantity)

       }
      
       function UPQuantity(event){
         console.log("UPQuantity");
         var input=event.target
         if (isNaN(input.value)|| input.value<=0){
           input.value=1
         }
         updateTotal()
       }
       function updateTotal(){
         console.log(input.value);
       var i=input.value+1;   
       console.log(i);      
       }*/
