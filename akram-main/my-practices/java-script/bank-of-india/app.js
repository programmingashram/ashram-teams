let signup =  document.getElementById('sign-up');
let login =  document.getElementById('login');
let SIGNUp =  document.getElementById('signup');
let LOGIn =  document.getElementById('login');
LOGIn.style.display = "none";

let at1 = document.getElementById('at1');
let at2 = document.getElementById('at2');
let at3 = document.getElementById('at3');
// for sign up
let signEmail = document.getElementById('email');
let signPass = document.getElementById('password');

// arrrey//
let array = [];

// creating function for sign form//
function loginfn() {
    if (signEmail.value == '' && signPass.value == ''){
        // loginbtn.classList.remove('disabled');
        console.log('please valid details');
    }
} 
function create(){
    LOGIn.style.display = "block";
    SIGNUp.style.display = "none";
    console.log('')
}

function data(){
    if (signEmail.value == ''){
        alert('Fill Valid email')
    }
    else if (signPass.value == ''){
        alert('Inter password')
    }
    else{
        array.push(
            {email : signEmail.value,
             pass: signPass.value}
            );
        console.log(array);
    }
}
let logAd = document.getElementById('loginAd');
let loginName = document.getElementById('loginName');

function logindata(){
    if (loginName.value == ''){
        alert('Inter Valid Name')
    }
    else if (logAd.value == ''){
        alert('Inter Adhar no.')
    }
    else{
        SIGNUp.style.display = "none";
       console.log(logindata())
    }
}

let cr1 = document.getElementById('create01');
let cr2 = document.getElementById('create02');
