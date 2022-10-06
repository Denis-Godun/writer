


let quoteArray = [];
let index = 0; 
let textPosition = 0; 
let flag = true;

loadQuote = () => {
  const url = 'https://fish-text.ru/get';

  fetch(url)

  .then(response => {
    if (!response.ok) throw Error(response.statusText);
      return response.json();
   })

   .then(data => {
      quoteArray[index] = data.text;
   })

   .catch(error => console.log(error));
}

typewriter = () => {
  if(flag){
    loadQuote();
    quoteArray[index] += ""; 
    flag = false;
  }

  document.querySelector(".container").innerHTML = quoteArray[index].substring(0, textPosition) + '<span>\u25AE</span>';

  if(textPosition++ != quoteArray[index].length){
    setTimeout("typewriter()", 100);
  }
  else{
    quoteArray[index] = ' ';
    setTimeout("typewriter()", 4000);
    textPosition = 0;
    flag = true;
  }   
}

window.addEventListener('load', typewriter);