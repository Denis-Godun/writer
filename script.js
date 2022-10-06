const container = document.querySelector(".container");

 loadQuote = () => {
   const url = "https://fish-text.ru/get";
 
   fetch(url)
 
   .then(response => {
     if (!response.ok) throw Error(response.statusText);
       return response.json();
    })
 
    .then(data => {
      console.log(data.text)
      container.innerHTML = data.text
    })
 
    .catch(error => console.log(error));
 }
 loadQuote()