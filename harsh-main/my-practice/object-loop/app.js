// let offer = {
//     carcare:{
//         Gas:"nitrogen",
//         price:"400",
//         yearly:"400"
//     },

//     carcare:{
//         Gas:"nitrogen",
//         price:"400",
//         yearly:"400"
//     },

//     carcare:{
//         Gas:"nitrogen",
//         price:"400",
//         yearly:"400"
//     },

//     carcare:{
//         Gas:"nitrogen",
//         price:"400",
//         yearly:"400"
//     },

//     carcare:{
//         Gas:"nitrogen",
//         price:"400",
//         yearly:"400"
//     },
 
//    }
//    let block = document.getElementById('tbody');
//    for(let i in offer ){
//     block.innerHTML +=`
//     <tr>
//         <td>${offer[i].gas}</td>
//         <td>${offer[i].price}</td>
//         <td>${offer[i].yearly}</td>
      
//     </tr>`;
// }

//    console.log("offer");

//    let arry = ['1','1','1',5];
//    console.log(arry);

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
        dicr: "n Graphic Print Round Neck White T-Shirt",
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
let x = 20;
let y = 10;
let z = x * y;
   console.log(z);
             
let a = 10;
let b = 20;
if(a == b){
    console.log('correct');
}else{
    console.log('wrong');
}

function test(){
    let c = 10;
    let d = 20;
    let e = c + d
    console.log(e);
}
test();

function test1(arg1,arg2){
 console.log(arg1+arg2);

}
test1(10,33);








