let login = document.getElementById('row1');
let singin = document.getElementById('row2');
let read = document.getElementById('row3');
let admin = document.getElementById('row4');
let accBlance = document.getElementById('row5');
let addMoney = document.getElementById('row6');
let singbtn = document.getElementById('singbtn');
let logbtn = document.getElementById('logbtn');



let logFname = document.getElementById('fname');
let logNum = document.getElementById('lognum');
let logAdd = document.getElementById('logAdd');
let logAdhar = document.getElementById('logAdhar');
let logPan = document.getElementById('logPan');
let logDep = document.getElementById('logDep');

let rlogFname = document.getElementById('rfname');
let rlogNum = document.getElementById('rlognum');
let rlogAdd = document.getElementById('rlogAdd');
let rlogAdhar = document.getElementById('rlogAdhar');
let rlogPan = document.getElementById('rlogPan');
let rlogDep = document.getElementById('rlogDep');


let signName = document.getElementById('signName');
let signAdhar = document.getElementById('signAdhar');

admin.style.display = "none";
singin.style.display = "none";
read.style.display = "none";
accBlance.style.display = "none";
addMoney.style.display = "none";

let array = [];

function signbtnvalid() {
    if (signName.value == '' && signAdhar.value == '') {
        console.log('fill the detail')
    } else {
        console.log('Succes fill')
    }
}

function loginbtnvalid() {
    if (logFname.value == '' && logNum.value == '') {
        console.log('fill the detail')
    } else if (logAdd.value == '' && logAdhar.value == '') {
        console.log('fill the detail')
    } else if (logPan.value == '') {
        console.log('fill the detail')
    }
    else {
        console.log('Succes fill')
    }
}



function moneyaddbtn(){
    addMoney.style.display = "none";
    accBlance.style.display = "block";
    avaMoney.innerHTML += `
    ${valueMoney.value + avaMoney.value}
    `
    

}


function singpage() {
    login.style.display = "none";
    singin.style.display = "block";

}
function logpage() {
    singin.style.display = "none";
    admin.style.display = "none";
    login.style.display = "block";
}

function loginpanvalid() {
    if (logDep.value < 499) {
        alert(min, 500);
    } else (logDep.value > 500); {
        console.log('success');
    }
}

function accData() {
    for (let n in array) {
        if (signName.value === array[n].Fname && signAdhar.value === array[n].Adhar) {
            login.style.display = "none";
            accBlance.style.display = "block";
            avaMoney.innerHTML += `
            <td>
                ${array[n].Deposit}
            </td>`
        }else{
            console.log('Please fill the Valid Data');
        }
    }

}

function matchUser() {
    console.log('Succes fill');
    singin.style.display = "none";
    read.style.display = "block";
    array.push(
        {
            Fname: logFname.value,
            Number: logNum.value,
            Address: logAdd.value,
            Adhar: logAdhar.value,
            Pan: logPan.value,
            Deposit: logDep.value
        }
    );
    console.log(array);
    rlogFname.value = logFname.value;
    rlogNum.value = logNum.value;
    rlogAdd.value = logAdd.value;
    rlogAdhar.value = logAdhar.value;
    rlogPan.value = logPan.value;
    rlogDep.value = logDep.value;
}


function addData() {
    if (signName.value == '') {
        console.log('fill the detail');
    } else if (signAdhar.value == '') {
        console.log('fill the detail');
    } else {
        adminData();
    }
}


function adminData() {
    for (let n in array) {
        read.style.display = "none";
        admin.style.display = "block";
        tableData.innerHTML += `
        <tr>
            <td>
                ${array[n].Fname}
            </td>
            <td>
                ${array[n].Number}
            </td>
            <td>
                ${array[n].Address}
            </td>
            <td>
                ${array[n].Adhar}
            </td>
            <td>
                ${array[n].Pan}
            </td>
            <td>
                ${array[n].Deposit}
            </td>
        </tr>
        `
    }
}

function addmoney(){
    accBlance.style.display ="none";
    addMoney.style.display ="block";
}