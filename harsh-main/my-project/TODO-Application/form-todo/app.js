// input Access //

let pann = document.getElementById('pan');
let adharr = document.getElementById('adhar');
let snakbar = document.getElementById('snakbar');
snakbar.style.display = 'none';
//  button access //
let linkbtn = document.getElementById('link');
let cancelBtn = document.getElementById('cancel');


// main button disable functionality //

adharr.addEventListener('keyup' , function(){
   
    if(pann.value !== '' && adharr.value !== ''){
        linkbtn.removeAttribute('disabled' , '');
        linkbtn.style.background = "orange";

    }else{
        linkbtn.setAttribute('disabled', '');
      
    }   
})
     
// alert section //
let error = document.getElementsByClassName('text-error');

for(let i = 0; i < error.length; i++){
    error[i].style.display = "none";  
}

pann.onblur = function(){
    if(pann.value === ""){
        error[0].style.display = "block";
    }
    else{
        error[0].style.display = "none";
        
    }
}

adharr.onblur = function(){
    if(adharr.value === ""){
        error[1].style.display = "block";
    }
    else{
        error[1].style.display = "none";
    }
}
 
// snakbar & main button effects //
linkbtn.addEventListener('click' , function(){
    snakbar.style.display = 'block';
    setTimeout(()=>{
        snakbar.remove();
    },5000);

    let array = [];
    array.push({detail:pann.value,
              dETAIL:adharr.value});
              console.log(array);
    if(pann.value !== '' && adharr.value !== ''){
        pann.value = ''
        adharr.value = ''
  
      }else{
         console.log('failed');
        
      } 
      linkbtn.setAttribute('disabled', true);
      linkbtn.style.background = "gray";
});

// cancel button //

cancelBtn.addEventListener('click' , function(){
    if(pann.value !== '' && adharr.value !== ''){
      pann.value = ''
      adharr.value = ''
        this.setAttribute
    }else{
       console.log('failed');
      
    } 
})

    
 
 
   


