let login = document.getElementById('login');
let signup = document.getElementById('singup')
let signBtn = document.getElementById('signbtn');
let loginbtn = document.getElementById('loginbtn');

login.style.display = 'none';

let RagisterEmail = document.getElementById('email');
let RagisterPass = document.getElementById('pass');

let logemail = document.getElementById('logmail');
let logpass = document.getElementById('logpass');

let array = [];

function addData(){ 
   
    if(RagisterEmail.value == ''){
        alert("Please fill email");
    }
    else if(RagisterPass.value == ''){
        alert("Please fill pass");
    }
    else{ 
        console.log("Success FIll");
        signup.style.display = "none";
        login.style.display = "block";
    
        array.push({emmail : RagisterEmail.value, pass: RagisterPass.value});
        console.log(array);
       
    }
}
function logindata(){
    if(logemail.value == ''){
        alert('plese fill email')
    }else if(logpass.value == ''){
        alert('fill password')
    }
    else{
        console.log('success fill');   
        mySaveData();
    }


}
function mySaveData(){
 
    for(let i in array){
        if(logemail.value === array[i].email && LoginPass.value === array[i].pass){
            login.style.display = "block";
            signup.style.display = "block";
            admin.style.display = "block";
            RagisterEmail.value = '';
            RagisterPass.value = '';
            logemail.value = ''; 
            logpass.value = '';
          
        }else{
            alert("Incorrect Email or pass!!!!");
        }
    }
}