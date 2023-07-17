function allowDrop(eve){
    eve.preventDefault();
}

function dragStart(eve){
    eve.dataTransfer.setData("text", eve.target.id);
}

function drop(eve){
    eve.preventDefault();

    let data = eve.dataTransfer.getData("text", eve.target.id);

    eve.target.appendChild(document.getElementById(data));
    console.log(eve.target);
}




// drang & drop
//   <1> ondragstart 
//   <2> ondragover 
//   <3> ondrop
//   <4>   
//   dragablr = true
