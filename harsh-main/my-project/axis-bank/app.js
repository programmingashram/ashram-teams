// login //
let login = document.getElementById('login');
let logmail = document.getElementById('logEmail'); 
let logpass = document.getElementById('logPass');
let loginbtn = document.getElementById('loginbtn')
// sign up //
let singup = document.getElementById('singup');
let regMail = document.getElementById('email');
let regPass = document.getElementById('pass');
let regUser = document.getElementById('signbtn');
//admin//
admin = document.getElementById('admin');
let tabel = document.getElementById('tableData');


userData = [];

//onclick event //
function logUser(){
    if(logmail.value !== '' && logpass.value !== ''){
        alert('success')
       
    }
    else alert('please fill input fields'); 
   
    validation();
    matchUser();

}
function btnValid(){
    if(logmail.value !== "" && logpass.value !== ""){
        loginbtn.classList.remove('disabled');
    }
    else{
        loginbtn.classList.add('disabled');
    }
}
function validation(){
    if(userData.length == 0){
        alert("User Not Found");
    }else if(userData.length !== 0 ){
        // console.log("User Found but not matched");
    }
    else{
        console.log("login");       
    }
}
function addData(){ 
    if(regMail.value !== '' && regPass.value !== ''){
        userData.push({email : regMail.value, pass: regPass.value});
        console.log(userData);
        alert('success');
        regMail.value = '';
        regPass.value = '';
      
    }else{
        alert("fill inputs");    
      
    }
 } 
 function matchUser(){
    for(let i in userData){
        if(userData[i].email === logmail.value && userData[i].pass === logpass.value){
            console.log('success');
            tableData.innerHTML += 
            `<tr>
                    <td>${regMail.value}</td>   
                    <td>${regPass.value}</td>                
            </tr>`;
        }
        else{
            alert("User Not Found");
        }
    }
}

function createacount(){
    // Input Feild
    let confrmName = document.getElementById('name');
    let confrmEmail = document.getElementById('em');
    let confrmpan = document.getElementById('pan');
    let confrmaadhar = document.getElementById('aadhar');
    let confrmcontact = document.getElementById('number');
    let confrmaddrees = document.getElementById('address');
    let confrmnominee = document.getElementById('nominee');
    let confrmdeposit = document.getElementById('dmoney');
    let color = document.getElementById('color');
    console.log(color.value);
    let profile = document.getElementById('profile');
    console.log(profile.value);

    let bg = document.querySelector('.bg-green');
    let profileImg = document.getElementById('profileImg');
    bg.style.backgroundColor = color.value;
    profileImg.innerHTML = `
        <img src="${profile.value}" class="profile"/>
    `;

    // Show Case
    let showName = document.getElementById('nameShow');
    let showEmail = document.getElementById('emailShow');
    let showcontact = document.getElementById('contactshow');
    let adharshow = document.getElementById('adharshow');
    let panshow = document.getElementById('panshow');
    let nomineeshow = document.getElementById('nomineeshow');
    let addressshow = document.getElementById('addressshow');
    let dmoney = document.getElementById('dmoney');


    showName.innerHTML += confrmName.value; 
    showEmail.innerHTML += confrmEmail.value;
    showcontact.innerHTML += confrmcontact.value;
    adharshow.innerHTML += confrmaadhar.value;
    panshow.innerHTML += confrmpan.value;
    nomineeshow.innerHTML += confrmnominee.value;
    addressshow.innerHTML += confrmaddrees.value;
    dmoney.innerHTML  += confrmdeposit.value; 
} 
// pars-int//
let hide = document.getElementById('hide');
let blank = document.getElementById('blank');
hide.style.display = 'none';

function add(){
    hide.style.display ="block"
}

function none(){
    if(blank.value !== ''){
        alert('successfully done');
        hide.style.display = 'none';
        blank.value = '';
    }
    else
        alert('plese enter ammout');
    
    }
   
