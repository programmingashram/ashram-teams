function allowDrop(eve){
    eve.preventDefault();
}
function allowDrag(eve){
    eve.dataTransfer.setData("text" , eve.target.id);
}
function drop(eve){

    eve.preventDefault();
   

    let data =  eve.dataTransfer.getData("text", eve.target.id);
    eve.target.appendChild(document.getElementById(data));
    eve.dataTransfer.getData("text", eve.target.id);
    console.log(eve.target)


}