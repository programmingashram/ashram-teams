// show case //
let cnfrmName = document.getElementById('cnfrmName');
let profession = document.getElementById('profesion');
let cnfprofile = document.getElementById('cnfprofile');
let cnfcall = document.getElementById('cnfcall');
let cnfwhatsap = document.getElementById('cnfwhatsap');
let cnfmail = document.getElementById('cnfmail');
let cnfmap = document.getElementById('cnfmap');
let cnfex = document.getElementById('cnfex');
let cnfexdet = document.getElementById('cnfexdet');
let cnfex2 = document.getElementById('cnfex2');
let cnfexdet2 = document.getElementById('cnfexdet2');
let cnfexdate = document.getElementById('cnfexdate');
let cnfedu  =  document.getElementById("cnfedu");
let cnfschool =  document.getElementById("cnfschool");
let cnfedudate = document.getElementById("cnfedudate");
let cnfedu2 =  document.getElementById("cnfedu2");
let cnfschool2 =  document.getElementById("cnfschool2");
let cnfedudate2 =  document.getElementById("cnfedudate2");


// adding data //
let data  = document.getElementById('name');
let addprofesion = document.getElementById('addprofession');
let addprofile = document.getElementById('addprofile');
let addcall = document.getElementById('addcall');
let addwhatsap = document.getElementById('addwhatsap');
let addmail = document.getElementById('addmail');
let addaddress = document.getElementById('addmap');
let addex = document.getElementById("addex");
let addexdet = document.getElementById("addexdet");
let addex2= document.getElementById("addex2");
let addexdet2 = document.getElementById("addexdet2");
let addexdate = document.getElementById("addexdate");
let addedu  =  document.getElementById("addedu");
let addschool =  document.getElementById("addschool");
let addedudate = document.getElementById("addedudate");
let addedu2 =  document.getElementById("addedu2");
let addschool2 =  document.getElementById("addschool2");
let addedudate2 =  document.getElementById("addedudate2");






function showname(){
    cnfrmName.innerHTML = data.value;
    profession.innerHTML = addprofesion.value;
    cnfprofile.innerHTML = addprofile.value;
    cnfcall.innerHTML = addcall.value;
    cnfwhatsap.innerHTML = addwhatsap.value;
    cnfmail.innerHTML = addmail.value;
    cnfmap.innerHTML = addmap.value;
    cnfex.innerHTML = addex.value;
    cnfexdet.innerHTML = addexdet.value;
    cnfex2.innerHTML = addex2.value;
    cnfexdet2.innerHTML = addexdet2.value;
    cnfexdate.innerHTML = addexdate.value;
    cnfedu.innerHTML = addedu.value;
    cnfschool.innerHTML = addschool.value;
    cnfedudate.innerHTML = addedudate.value;
    cnfedu2.innerHTML = addedu2.value;
    cnfschool2.innerHTML = addschool2.value;
    cnfedudate2.innerHTML = addedudate2.value;
    addData();
    langh(); 
    none();  
    Validation();
}

   function Validation(){
    if(data.value !== ""){
        alert('Success');
        
    }else{
        hide.style.display = 'block';
        alert('plese fill blank inputs')
    }
   }
  


// Language Inputs
let addhindi =  document.getElementById('addhindi');
let addeng =  document.getElementById('addeng');
let addmarathi =  document.getElementById('addmarathi');

// Language Element 
let cnfhindi =  document.getElementById('cnfhindi');
let cnfeng =  document.getElementById('cnfeng');
let cnfmarathi =  document.getElementById('cnfmarathi');

function langh(){
    if(addhindi.checked == true) {
        cnfhindi.innerHTML = "Hindi";
        if(addeng.checked == true){
            cnfeng.innerHTML = "English";
        }else{
            cnfeng.innerHTML = "";
        }
        if( addmarathi.checked == true){
            cnfmarathi.innerHTML ='Marathi'
        } else{
            cnfmarathi.innerHTML = "";
       }   
    }                                       
    else{
        cnfhindi.innerHTML = "";
    }
}
let fileInput = document.getElementById('input');
let img= document.getElementById('data');

fileInput.onchange = () => {
   const selectedFile = fileInput.files[0];

   img.src += `${selectedFile.name}`;
}

// background,font,text-color//

// decliar input//
let bgColorControl = document.getElementById('bgColor');
let fontSizeControl = document.getElementById('fontSize');
let textColorControl = document.getElementById('textColor');
let headingColorControl = document.getElementById("headingColorControl");
// assign //

let element  = document.querySelector('.element');
let font = document.querySelectorAll('.siteheading');

let change = ()=>{font.forEach(i =>{
    i.style.color = headingColorControl.value;
    i.style.fontSize = fontSizeControl.value + "px";
});
element.style.color = textColorControl.value;
element.style.backgroundColor = bgColorControl.value;
}

// resume submit button hide //
let hide = document.querySelector('.create');
let temphide = document.getElementById('temphide');
hide.style.display = 'block';
function none(){
    if( hide.style.display === "block"){
        hide.style.display = 'none';
        editbtn.style.display = 'block';
        submitBtn.style.display = "block";
    }
    else{
        hide.style.display = 'block';
    }
}

// main section hide after click //
let main = document.getElementById('main');
let nonnn = document.getElementById("nonnn");
let block = document.getElementById('show');
element.style.display = "none";
 main.style.display = "block";
function create(){
    if( main.style.display === "block"){
        main.style.display = "none";
        element.style.display = "block";
    }else{
        main.style.display = "block";
    
    }   
}
// data push in array //
array = [];

function addData(){
    if(data.value !== "" && profession.value !== ""){
        array.push({name : data.value ,
                    profession : addprofesion.value,
                    profile : addprofile.value,    
                    });
        console.log(array);
    }
}

// Edit button //
let submitBtn = document.getElementById('submitBtn');
let editbtn = document.getElementById('edit');
editbtn.style.display = "none";
submitBtn.style.display = "none";

editbtn.addEventListener('click', ()=>{

    if(editbtn.style.display === 'block'){
       hide.style.display = 'block';
       editbtn.style.display = "none";
       submitBtn.style.display = "none";
    }else{
     console.log('false');
    }

});
let main2 = document.querySelector('.main2');
console.log('bginfo');
submitBtn.addEventListener('click' , ()=>{
    if(submitBtn.style.display === 'block'){
        editbtn.style.display = "none";
        main2.style.display = 'none';
        submitBtn.style.display = "none";
        window.print();
        
    }else{ console.log('faild');
      
    }
});


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    