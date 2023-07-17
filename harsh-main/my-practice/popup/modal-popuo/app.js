let openModalBtn = document.getElementById("openModal");
let closeModelBtn = document.getElementById("closeModel");
let modelContainer = document.getElementById("modelContainer");


function openModal(){
    modelContainer.style.display = "block";
}
function closeModel(){
    modelContainer.style.display = "none";
}
openModalBtn.addEventListener("click" , openModal);
closeModelBtn.addEventListener("click" , closeModel)