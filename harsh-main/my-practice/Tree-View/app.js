let toggler = document.getElementById("box");
let i;
for(let i = 0; i < toggler.length;i++){
    toggler[i].addEventListener("click" , ()=>{
        console.log(toggler);
    })
}