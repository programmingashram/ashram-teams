let right = document.getElementById('right');
let wrong = document.getElementById('wrong');
let success = document.getElementById('success');
let danger = document.getElementById('danger');
function ans(){
    if(right !== ''){

        success.style.color = "green";
        danger.style.color = 'red';
        if(right == '' && wrong ==''){
            alert('plese fill someone');
        }else{
            console.log('');
        }
    }else{
        alert('unsuccess');
    }
}