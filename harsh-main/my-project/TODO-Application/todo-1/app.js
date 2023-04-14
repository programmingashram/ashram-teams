let trigger = document.getElementById('trigger');
let snakbar = document.querySelector('.snakbar');
let cnfrmDel = document.getElementById('cnfrmdel');
let cancel = document.getElementById('cancel');
snakbar.style.display = 'none';


trigger.addEventListener('click' , function(){

    let input = document.getElementById('todoCreater');

    let todoPas = document.getElementById("todoPass");

    let todoclr = document.getElementById('todoclr');

    let todoArea = document.getElementById('todoArea');

    let array = [];

    array.push({username: input.value,
                pass: todoPas.value,
                color: todoclr.value});
               
  
    for(let i in array){
        todoArea.innerHTML += `
        <div class="toDo sys-elivation-v2 mt-5 bg-${array[i].color} p-2">
            <h2 class="editContent">${array[i].username}</h2>
            <p class ="editContent">${array[i].pass}</p>
            <i class="fa-solid fa-edit editTodo"></i>
            <i class="fa-solid fa-trash deleteTodo"></i>
        </div>`;
    }

    // delite todo //
    let deliteTrigger = document.getElementsByClassName('deleteTodo');
    for(let i = 0; i < deliteTrigger.length; i++){
        deliteTrigger[i].addEventListener('click' , function(){
            if(deliteTrigger[i].clicked = true){
                snakbar.style.display = 'block';
                if(cancel[i].clicked = true){
                  alert('hello'); 
                }else{
                    console.log('hhhh');
                }
              }else{
                  console.log('success');
              }
              this.parentElement.style.display = 'none';
            })
    }

    // edit todo //

    let editContent = document.getElementsByClassName('editContent');
    for(let i = 0; i < editContent.length; i++){
        editContent[i].addEventListener('click' , function(){
            if(editContent[i].clicked = true){
                this.contentEditable = true;
            }else{
                this.contentEditable = false;
            }
        })
    }

});
