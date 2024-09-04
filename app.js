let inputbox = document.querySelector("#input-box");
let list = document.querySelector("#list-container");

function addTask() {
    if (inputbox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerText = inputbox.value;
        list.appendChild(li);
        
        let span = document.createElement("span");
        span.innerText = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = '';
    savedata();
}

list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    }
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);


function savedata(){
    localStorage.setItem("data", list.innerHTML);
};
function showTask(){
    list.innerHTML=localStorage.getItem("data");
}
showTask()