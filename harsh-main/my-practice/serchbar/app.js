function inputFilter(){
    let searchBar = document.getElementById("filterd");
    let filValue = searchBar.value.toUpperCase();
    console.log(filValue);

    let main = document.getElementById("main");
    let box = main.getElementsByClassName("box");

    for(let i = 0;i < box.length;i++){
        let para = box[i].getElementsByClassName("para")[0];

        if(para){
            let newvalue = para.textContent || para.innerText; 
            if(newvalue.toUpperCase().indexOf(filValue) > -1){
            box[i].style.display = "";
          }
        else{
            box[i].style.display = "none";
        }
    }
}
}



