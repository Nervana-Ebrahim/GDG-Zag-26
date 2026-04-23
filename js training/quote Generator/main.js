
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getquote(url){
    const response = await fetch(api_url);
    var data = await response.json();
    quote.innerHTML=data.content;
    author.innerHTML=data.author;
}
getquote(api_url);
function tweet (){
    window.open("https://twitter.com/internet/tweet?text=Hello%20world","Tweet window","width=600,height=300"+  quote.innerHTML);

}