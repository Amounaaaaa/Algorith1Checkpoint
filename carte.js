function Read(sentence){
     nbrCa=0;
     nbWords=1;
     let nb=0;
     let voyelles=["aeiouyàâèéêëîïôùûœ"];

    for(i=0;i<sentence.length;i++){

          while(sentence[i]!="."){
            i++;
            nbrCa++

          }
          if (sentence[i]=" ") nbWords++;
    
           console.log("les nombre de caractere est "+nbrCa+"et les nombre de mots est: "+nbWords)    
              
           }
          }
    

//////
function Read(sentence){
  
  var voyelles=["aeiouyàâèéêëîïôùûœ"];
   var nb=0;
 for( var i=0;i<sentence.length;i++){
    
       for( var j=0;j<voyelles.length-1;j++){
               if(sentence[i]==voyelles[j])    nb++;
             
 }
 }
 console.log("les nombre de Voyelles est "+nb);

 }

function Read1(sentence) {
  let voyelles=["aeiouyàâèéêëîïôùûœ"];
  let s=["jhhfbd jhbfhfeejkf jnjneekfke"]
  
  
  // Only change code below this line
  for (let i = 0; i < s.length-1; i++) {
    for (let j = 0; j < voyelles[j].length-1; j++) {
      if (s[i]==voyelles[j]) 
      console.log("cc");
      
    }
  }
  // Only change code above this line
  //return product;
}