
function filter(){
    let serchFilter,newfil,card
    serchFilter = document.getElementById("serchFilter");
    newfil = serchFilter.value.toUpperCase();
    card = block.getElementsByClassName("card");
   
    for(let i = 0; i < card.length;i++){
        let data = card[i].getElementsByClassName("detail_brand")[0];
        if(data){
            let newValue = data.textContent || data.innerText;
            if(newValue.toUpperCase().indexOf(newfil) > -1 ){
                card[i].style.display = ""
            }else{
                card[i].style.display = "none";
            }
        }
    }  
}

function ProFilter(){
    let cheakItem = document.getElementsByClassName('items');
    for(let i=0; i < cheakItem.length; i++){
        cheakItem[i].addEventListener('change', ()=>{
            if(cheakItem[i].checked == true){
                let newfil,card;
                newfil = cheakItem[i].value.toUpperCase();
                card = block.getElementsByClassName("card");
                for(let i = 0; i < card.length;i++){
                    let data = card[i].getElementsByClassName("detail_brand")[0];
                    if(data){
                        let newValue = data.textContent || data.innerText;
                        if(newValue.toUpperCase().indexOf(newfil) > -1 ){
                            card[i].style.display = "";
                        }else{
                            card[i].style.display = "none";
                        }
                    }
                }  
                 console.log("cheaked");

            }else if(cheakItem[i].checked == false){
                console.log("unchek");
                filter();
            }
            else{
                console.log('c-failed');
            }
        })
    }
}
ProFilter();


// // price sorting //
// function sorting(){
//     let priceSorting = document.getElementsByClassName("price");
//     for(i=0; i < priceSorting.length;i++){
//     priceSorting.addEventListener("change", ()=>{
//        if(priceSorting.clicked)
//     })
// }
// }
// sorting();

// instanse of //
class Article{
    constructor(img,brand,discrip,price,delprice,offer){
        this.img = img;
        this.brand = brand;
        this.discrip = discrip;
        this.price = price;
        this.delprice = delprice;
        this.offer = offer
    };
}

let sec1 = new Article("img/roadstar-1.webp","Roadstar","Mens Cotton Pure  Black T-shirt","Rs.249","Rs.500","(50% off)");
let sec2 = new Article("img/r-2'.webp","Friskers","Mens Cotton Pure Cotton Gray long T-shirt","Rs 395","Rs.500","(50% off)");
let sec3 = new Article("img/r-3.webp"," Tommy Hilfiger","Mens Cotton Pure Cotton Maroon T-shirt","Rs 495","Rs.500","(50% off)");
let sec4 = new Article("img/r-4.webp","Jack & Jones","Mens Cotton Pure Cotton White T-shirt","Rs 249","Rs.500","(50% off)");
let sec5 = new Article("img/r-5.webp"," HRX by Hrithik Roshan","Mens Cotton Pure Cotton Red T-shirt","Rs 299","Rs.500","(50% off)");
let sec6 = new Article("img/r-6.avif","U.S. Polo Assn.","Mens Cotton Pure Cotton Gray T-shirt","Rs 399","Rs.500","(50% off)");
let sec7 = new Article("img/r-7.avif","Puma","Mens Cotton Pure Cotton light blue T-shirt","Rs 299","Rs.500","(50% off)");
let sec8 = new Article("img/r-8.webp","Roadstar","Mens Cotton Pure Cotton Brown T-shirt","Rs 199","Rs.500","(50% off)");



let array = [sec1,sec2,sec3,sec4,sec5,sec6,sec7,sec8];

for(let i in array){
    let block = document.querySelector("#block .d-inline")
    block.innerHTML +=`
    <li>
        <div class="card relative">
            <img src="${array[i].img}" alt="">
            <div class="detail_brand">
                <h4>${array[i].brand}</h4>
                <p class="mt-2" >${array[i].discrip}</p>
                <p class="product_price mt-2"><b>${array[i].price}</b> <span><del>${array[i].delprice}</del></span> <span style="color:#ff00008c">${array[i].offer}</span></p> 
            </div>   
            <div class="product_rating_count">
                <span>4.2 <i class="fa-sharp fa-solid fa-star"></i> | 25.7k</span>
            </div> 
        </div>
    </li>
    `
}

