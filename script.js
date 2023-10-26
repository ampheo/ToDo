const inputBox = document.getElementById("inptbox")
const listCont = document.getElementById("listcon")

function addtask(){
    if(inputBox.value === ''){
        alert("you must write somthing")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    savedata();

}
listCont.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);
function savedata(){
    localStorage.setItem("data", listCont.innerHTML)
}
function showtask(){
    listCont.innerHTML = localStorage.getItem("data")
}
showtask();