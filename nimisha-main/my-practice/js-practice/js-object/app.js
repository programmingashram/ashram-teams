var body = document.getElementById('body');

function section(){
    var container = document.createElement('div');
    body.appendChild(container);
    container.setAttribute('class', 'container');

    function box(){
        var row = document.createElement('div');
        container.appendChild(row);
        row.setAttribute('id', 'row');

    }box()

}section()

let itemDetails = {
    AsusRyzen :{
        image:  "./image/9661-1-1170x751.png",
        name : "ASUS Vivobook Pro 15 Ryzen 7 Octa Core AMD R7-4800H",
        review : "4.5",
        reviewPerson : "(632)",
        Price : "$880",
        mPrice : "$950",
        discount : "27%Off"
    },

    Asusoled :{
        image: "./image/laptop_PNG5928.png",
        name : "ASUS Pro 15 OLED Ryzen 7 Octa Core AMD R7-4800H",
        review : "4.6",
        reviewPerson : "(489)",
        Price : "$880",
        mPrice : "$950",
        discount : "27%Off"
    },

    Asushexa :{
        image: "./image/laptop_PNG5930.png",
        name : "ASUS Vivobook Pro 15 Ryzen 7 Octa Core AMD R7-4800H",
        review : "4.5",
        reviewPerson : "(632)",
        Price : "$880",
        mPrice : "$950",
        discount : "27%Off"
    },

    MSIcore :{
        image: "./image/laptop_PNG5934.png",
        name : "ASUS Vivobook Pro 15 Ryzen 7 Octa Core AMD R7-4800H",
        review : "4.5",
        reviewPerson : "(632)",
        Price : "$880",
        mPrice : "$950",
        discount : "27%Off"
    },

    Acer :{
        image: "./image/laptop_PNG5936.png",
        name : "ASUS Vivobook Pro 15 Ryzen 7 Octa Core AMD R7-4800H",
        review : "4.5",
        reviewPerson : "(632)",
        Price : "$880",
        mPrice : "$950",
        discount : "27%Off"
    },
    Ryzen :{
        image:  "./image/9661-1-1170x751.png",
        name : "ASUS Vivobook Pro 15 Ryzen 7 Octa Core AMD R7-4800H",
        review : "4.5",
        reviewPerson : "(632)",
        Price : "$880",
        mPrice : "$950",
        discount : "27%Off"
    },

    Asus :{
        image: "./image/laptop_PNG5928.png",
        name : "ASUS Pro 15 OLED Ryzen 7 Octa Core AMD R7-4800H",
        review : "4.6",
        reviewPerson : "(489)",
        Price : "$880",
        mPrice : "$950",
        discount : "27%Off"
    },

    hexa :{
        image: "./image/laptop_PNG5930.png",
        name : "ASUS Vivobook Pro 15 Ryzen 7 Octa Core AMD R7-4800H",
        review : "4.5",
        reviewPerson : "(632)",
        Price : "$880",
        mPrice : "$950",
        discount : "27%Off"
    },

    MSI :{
        image: "./image/laptop_PNG5934.png",
        name : "ASUS Vivobook Pro 15 Ryzen 7 Octa Core AMD R7-4800H",
        review : "4.5",
        reviewPerson : "(632)",
        Price : "$880",
        mPrice : "$950",
        discount : "27%Off"
    },

    Acerhp :{
        image: "./image/laptop_PNG5936.png",
        name : "ASUS Vivobook Pro 15 Ryzen 7 Octa Core AMD R7-4800H",
        review : "4.5",
        reviewPerson : "(632)",
        Price : "$880",
        mPrice : "$950",
        discount : "27%Off"
    }
}

let Row = document.getElementById("row");

for(let i in itemDetails){
    Row.innerHTML += `
    <div class="box">
        <div class="inner-box">
            <div class="head">
               <img src="${itemDetails[i].image}" alt="">
            </div>
            <div class="title">
                <p class="product-name">
                    ${itemDetails[i].name}
                </p>
                <p class="product-review">
                    <span class="review">${itemDetails[i].review} <i class="fa-solid fa-star"></i></span>
                    <span class="reviewNumber">${itemDetails[i].reviewPerson}</span>
                </p>
                <p class="product-price">
                    <span class="Price"><b>${itemDetails[i].Price}</b></span>
                    <span class="mPrice"><del>${itemDetails[i].mPrice}</del></span>
                    <span class="discount"><b>${itemDetails[i].discount}</b></span>
                </p>
            </div>
        </div>
    </div>
    `;
}