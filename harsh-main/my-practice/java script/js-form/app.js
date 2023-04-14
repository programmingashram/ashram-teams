let x = document.querySelector('.eventt');
function onkey(){
    if(x ==! ''){
    alert('success');
    }else{
        alert('fill data');
    }
    console.log('onkey');
}

function displaydate(){
    document.getElementById('demo') .innerHTML = Date();
}   console.log('displaydate');

let facility = document.getElementById('facility');
facility.style.background = 'orange';
facility.style.padding = '10px';
facility.style.fontSize = '20px';
facility.style.width = '15%';

function mOver(obj){
   obj.innerHTML = 'Thank you';
}
function mOut(obj){
    obj.innerHTML = 'Mouse Over me';
}