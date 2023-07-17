function filterd(){
   let filterSerch = document.getElementById("filterSerch");
   let filValue = filterSerch.value.toUpperCase();
   console.log(filValue);
   
   let brand = block.getElementsByClassName("col-md-3");
   for(let i = 0; i < brand.length;i++){
    console.log(brand[i]);
    let para = brand[i].getElementsByClassName("card")[0];
  
    if(para){
        let newValue = para.textContent || para.innerText;
        if( newValue.toUpperCase().indexOf(filValue) > -1
        ){
            brand[i].style.display = "";
        }
    else{
        brand[i].style.display = "none";
    }
   }

}
}


let tserts = {
    alanjonesred: {
        img : "./img/img-1.jpeg",
        dicr: "Men Graphic Print Round Neck White T-Shirt",
        brand:'alanjones', 
        dicr: "Mebrand:'alanjones',n Graphic Print Round Neck White T-Shirt",
        color:'red',
        price:'499',
        del:'1999',
        size:'xl',
        size1:'l',
        size2:'m',
        size3:'s'
    },
    alanjonesorange: {
        img : "./img/img-2.jpeg",
        brand:'Puma', 
        dicr: "Mebrand:'alanjones',n Graphic Print Round Neck White T-Shirt",
        color:'orange',
        price:'555',
        del:'1699',
        size:'xl',
        size1:'l',
        size2:'m',
        size3:'s'
    },
    alanjonesgreen: {
        img :"./img/img-3.jpeg",
        brand:'Jockey', 
        dicr: "Mebrand:'alanjones',n Graphic Print Round Neck White T-Shirt",
        color:'green',
        price:'299',
        del:'1799',
        size:'xl',
        size1:'l',
        size2:'m',
        size3:'s'
    },
    alanjonespink: {
        img : "./img/img-4.jpeg",
        brand:'nostrum',
        dicr: "Mebrand:'alanjones',n Graphic Print Round Neck White T-Shirt",
        color:'pink',
        price:'899',
        del:'1899',
        size:'xl',
        size1:'l',
        size2:'m',
        size3:'s'

    },
    pumared: {
        img : "./img/red-1.webp",
        brand:'nostrum',
        dicr: " Graphic Print Round Neck White T-Shirt",
        color:'pink',
        price:'899',
        del:'1899',
        size:'xl',
        size1:'l',
        size2:'m',
        size3:'s'

    } ,
    pumagreen: {
        img : "./img/red-2.webp",
        brand:'mufti',
        dicr: "Graphic Print Round Neck White T-Shirt",
        color:'pink',
        price:'899',
        del:'1899',
        size:'xl',
        size1:'l',
        size2:'m',
        size3:'s'

    },
    pumaorange: {
        img :  "./img/red-3.webp",
        brand:'alpinchino',
        dicr: " Graphic Print Round Neck White T-Shirt",
        color:'pink',
        price:'899',
        del:'1899',
        size:'xl',
        size1:'l',
        size2:'m',
        size3:'s'

    },
    pumapink: {
        img : "./img/red-4.webp",
        brand:'alanjones',
        dicr: "Graphic Print Round Neck White T-Shirt",
        color:'pink',
        price:'899',
        del:'1899',
        size:'xl',
        size1:'l',
        size2:'m',
        size3:'s'

    }  

}



let block = document.querySelector('#block .row');
for(let a in tserts) {
    block.innerHTML +=`
    <div class="col-md-3">
        <div class="card my-4">
            <img src="${tserts[a].img}" alt="" class="height">
            <a href="" class="p-3 nav-link">
                <h6>
                    ${tserts[a].brand}
                </h6> 
                <div class="row">
                    <div class="col-md-6">
                        <span> ${tserts[a].dicr}</span>
                    </div>
                    <div class="col-md-6">
                    <img src="img/ass.png" alt="" class="w-100">
                    </div>
                </div>
                <div class="price">
                    <span> ${tserts[a].price} <del>${tserts[a].del}</del></span>
                    <span>${tserts[a].size}, ${tserts[a].size1}, ${tserts[a].size2}, ${tserts[a].size3}</span>
                </div>
            </a>
        </div>
    </div>`        
}





