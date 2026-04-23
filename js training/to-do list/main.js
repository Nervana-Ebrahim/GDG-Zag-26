const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let button=document.querySelector("button")
 button.onclick=function() {
    if (inputBox.value === '') {
        alert("You must write something!");
    }
     else{
        let li = document.createElement("li");
        li.textContent = inputBox.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";   
        
        li.appendChild(span);
         listContainer.appendChild(li);
         

    }
    
    inputBox.value=""
    savedata();
}
listContainer.onclick=function(e){
    if(e.target.tagName==="li"){
        e.target.classList.toggle("checked")
        savedata();
    }
    else if(e.target.tagName==="span"){
        e.target.parentElement.remove();
        savedata();
    }
    
};
function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showdata(){
listContainer.innerHTML=localStorage.getItem("data")
}
showdata();