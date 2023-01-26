let signup = document.getElementById('signup');
let login = document. getElementById('login');
let signbtn = document.getElementById('signButton');
let loginbtn = document.getElementById('loginbtn');

//access ragster email or pass
let ragisterEmail = document.getElementById('email');
let ragisterPass = document.getElementById('pass');

//access login email or password
let loginEmail = document.getElementById('logEmail');
let loginPass = document.getElementById('logPass');

login.style.display = "none";
admin.style.display = "none";

let array = [];

function addData(){
    if(ragisterEmail.value == ''){
        alert('please fill email');
    }
    else if(ragisterPass.value == ''){
        alert('please fill password');
    }
    else{
        console.log('successfull fill');
        signup.style.display = "none";
        login.style.display = "block";
        array.push({email : ragisterEmail.value, pass : ragisterPass.value});
         console.log(array);
    }
}

function matchUser(){
    if(loginEmail.value == ''){
        alert('please fill valid email');
    }
    else if(loginPass.value == ''){
        alert('please fill valid password');
    }
    else{
        login.style.display = "block";
        signup.style.display = "block";
    }
}

   