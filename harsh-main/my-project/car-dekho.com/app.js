// tab //
function tabChange(evt, CarChange){
       
        let tabPane = document.getElementsByClassName('tab-pane');
        for(let i = 0 ; i < tabPane.length;i++){
                tabPane[i].style.display = "none";
        }
        let tabTrig = document.getElementsByClassName('tab-trig');
        for(let i = 0; i < tabTrig.length; i++){
                tabTrig[i].className = tabTrig[i].className.replace(" sys-btn-accent", "");
        }
        document.getElementById(CarChange).style.display = "block";
        evt.currentTarget.className += "";    
} 
let allcars = {
    // hatchback //
        hatchback : [
    {
            img: 'images/hatch.avif',
            name : 'Maruti Swift',
            color : 'Red',
            price : '6-7 lakh',
            btns : 'check march offers',
            id : 'slide0'
            
    },
    {
            img: 'images/hatch.avif',
            name : 'Maruti Baleno',
            color : 'Blue',
            price : '6-8 lakh',    
            btns : 'check march offers',
            id : ''   
    },
    { 
            img: 'images/tiago.jpg',
            name : 'Hyundai i20',
            color : 'Blue',
            price : '5-9 lakh', 
            btns : 'check march offers',
            id : ''  
    },
    {
            img: 'images/hatch.avif',
            name : 'Hyundai i20',
            color : 'Blue',
            price : '5-9 lakh', 
            btns : 'check march offers',
            id : ''  
    },
    {
        img: 'images/hatch.avif',
        name : 'Hyundai i20',
        color : 'Blue',
        price : '5-9 lakh', 
        btns : 'check march offers',   
        id : ''  
},
{
    img: 'images/tiago.jpg',
    name : 'Hyundai i20',
    color : 'Blue',
    price : '5-9 lakh', 
    btns : 'check march offers',
    id : 'slidel'
}
    ],
    // Sadan //
       sadan : [
        {
                img: 'images/sedan.avif',
                name : 'Hyundai Verna',
                color : 'gray',
                price : '5-9  lakh',
                btns : 'check march offers'
        },
        {
                img: 'images/sedan.avif',
                name : 'Hyundai Verna',
                color : 'Black',
                price : '8-9 lakh',
                btns : 'check march offers'
        },
        { 
                img: 'images/sedan.avif',
                name : 'Hyundai Verna',
                color : 'Black',
                price : '6-9 lakh',
                btns : 'check march offers'
        },
        {       
                img: 'images/sedan.avif',
                name : 'Hyundai Verna',
                color : 'red',
                price : '10-11 lakh',
                btns : 'check march offers'
        }
       ],
    //   Suv //
       suv : [
        {
                img: 'images/thar.jpg',
                name : 'Mahindra Thar',
                color : 'Red',
                price : '6-7 lakh',
                btns : 'check march offers'
        },
        {
                img: 'images/thar.jpg',
                name : 'Maruti Baleno',
                color : 'Blue',
                price : '6-8 lakh',    
                btns : 'check march offers'   
        },
        { 
                img: 'images/thar.jpg',
                name : 'Tata Tiago',
                color : 'Black',
                price : '6-9 lakh',       
                btns : 'check march offers'
        },
        {
                img: 'images/thar.jpg',
                name : 'Hyundai i20',
                color : 'Blue',
                price : '5-9 lakh', 
                btns : 'check march offers'
        }
       ],
    //  Muv //
       muv : [
        {
                img: 'images/SUv.avif',
                name : 'Maruti Ertiga',
                color : 'Red',
                price : '6-7 lakh',
                btns : 'check march offers'
        },
        {
                img: 'images/SUv.avif',
                name : 'Maruti Baleno',
                color : 'Blue',
                price : '6-8 lakh',    
                btns : 'check march offers'   
        },
        { 
                img: 'images/SUv.avif',
                name : 'Tata Tiago',
                color : 'Black',
                price : '6-9 lakh',       
                btns : 'check march offers'
        },
        {
                img: 'images/SUv.avif',
                name : 'Hyundai i20',
                color : 'Blue',
                price : '5-9 lakh', 
                btns : 'check march offers'
        }
       ]
}
// reviews //
let reviews = {
    expertReviews : [
      {
        img : "images/electric.jpg",
        name : "Hyundai Verna: First Drive Review",
        detail : "Sedans in the automotive market are shrinking because, while they appeal to the heart, it's hard to convince the head.",
        data :  "N",
        data1 : "Nabeel",
        date : "Mar 30, 2023"
      },
      {
        img : "images/electric.jpg",
        name : "Hyundai Verna: First Drive Review",
        detail : "Sedans in the automotive market are shrinking because, while they appeal to the heart, it's hard to convince the head.",
        data :  "N",
        data1 : "Nabeel",
        date : "Mar 30, 2023"
      },
    
    ]
}
// stories //
let story = {
    fStories : [
        {
            img : "images/Features.avif",
            name : "Hyundai Verna: First Drive Review",
            detail : "Sedans in the automotive market are shrinking because, while they appeal to the heart, it's hard to convince the head.",
            data :  "N",
            data1 : "Nabeel",
            date : "Mar 30, 2023"
        },
        {
            img : "images/Features.avif",
            name : "Hyundai Verna: First Drive Review",
            detail : "Sedans in the automotive market are shrinking because, while they appeal to the heart, it's hard to convince the head.",
            data :  "N",
            data1 : "Nabeel",
            date : "Mar 30, 2023"
        },
     
    ]
}
//  videos //

let videos = {
    carVideos : [
        {
            img : "https://www.youtube.com/embed/_c2wzqHoJpo",
            detail : "Rolls Royce - Exuberant luxury : Geneva Motor Show 2018 : PowerDrift",
            date : "Mar 11, 2018"
        },
        {
            img : "https://www.youtube.com/embed/_c2wzqHoJpo",
            detail : "Rolls Royce - Exuberant luxury : Geneva Motor Show 2018 : PowerDrift",
            date : "Mar 11, 2018"
        }
    ]
}


    //  latest car //  
    let latestcar = {
        car : [
            
            {
                img : "images/latest.avif",
                name : "Skoda Kushaq",
                price : "Rs11.59 - 19.69 Lakh*",
                id : "latest-left"
            },
            {
                img : "images/latest.avif",
                name : "Skoda Kushaq",
                price : "Rs11.59 - 19.69 Lakh*",
                id : ""
            },
            
            {
                img : "images/latest.avif",
                name : "Skoda Kushaq",
                price : "Rs11.59 - 19.69 Lakh*",
                id : ""
            },
            
            {
                img : "images/latest.avif",
                name : "Skoda Kushaq",
                price : "Rs11.59 - 19.69 Lakh*",
                id : ""
            },
            
            {
                img : "images/latest.avif",
                name : "Skoda Kushaq",
                price : "Rs11.59 - 19.69 Lakh*",
                id : ""
            },
            
            {
                img : "images/latest.avif",
                name : "Skoda Kushaq",
                price : "Rs11.59 - 19.69 Lakh*",
                id : ""
            },
            
            {
                img : "images/latest.avif",
                name : "Skoda Kushaq",
                price : "Rs11.59 - 19.69 Lakh*",
                id : ""
            },
            
            {
                img : "images/latest.avif",
                name : "Skoda Kushaq",
                price : "Rs11.59 - 19.69 Lakh*",
                id : ""
            },
            
            {
                img : "images/latest.avif",
                name : "Skoda Kushaq",
                price : "Rs11.59 - 19.69 Lakh*",
                id : ""
            },
            
            {
                img : "images/latest.avif",
                name : "Skoda Kushaq",
                price : "Rs11.59 - 19.69 Lakh*",
                id : ""
            },
            
            {
                img : "images/latest.avif",
                name : "Skoda Kushaq",
                price : "Rs11.59 - 19.69 Lakh*",
                id : "latest-right"
            },
        ]
    }
    // Upcoming car //
    let upComingcar = {
        cars : [
            
            {
                img :"images/upcoming.avif",
                name : "Toyota Innova Crysta",
                price : "Rs20 - 23 Lakh",
                id : "left-arrow"
            },
            {
                img :"images/upcoming.avif",
                name : "Toyota Innova Crysta",
                price : "Rs20 - 23 Lakh",
                id : ""
            },
            {
                img :"images/upcoming.avif",
                name : "Toyota Innova Crysta",
                price : "Rs20 - 23 Lakh",
                id : ""
            },
            {
                img :"images/upcoming.avif",
                name : "Toyota Innova Crysta",
                price : "Rs20 - 23 Lakh",
                id : ""
            },
            {
                img :"images/upcoming.avif",
                name : "Toyota Innova Crysta",
                price : "Rs20 - 23 Lakh",
                id : ""
            },
            {
                img :"images/upcoming.avif",
                name : "Toyota Innova Crysta",
                price : "Rs20 - 23 Lakh",
                id : ""
            },
            {
                img :"images/upcoming.avif",
                name : "Toyota Innova Crysta",
                price : "Rs20 - 23 Lakh",
                id : ""
            },
            {
                img :"images/upcoming.avif",
                name : "Toyota Innova Crysta",
                price : "Rs20 - 23 Lakh",
                id : ""
            },
            {
                img :"images/upcoming.avif",
                name : "Toyota Innova Crysta",
                price : "Rs20 - 23 Lakh",
                id : ""
            },
            {
                img :"images/upcoming.avif",
                name : "Toyota Innova Crysta",
                price : "Rs20 - 23 Lakh",
                id : ""
            },
            {
                img :"images/upcoming.avif",
                name : "Toyota Innova Crysta",
                price : "Rs20 - 23 Lakh",
                id : "right-arrow"
            },
        ]
    }
    // Car icon //
    let car = {
        carIcon : [
            {
                img : "img-icon/maruti.webp",
                name :  "maruti suzuki",
                id : "slide1"
            },
            {
                img : "img-icon/mercedes-benz.webp",
                name :  "Mercides",
                id : ""
            },
            {
                img : "img-icon/maruti.webp",
                name :  "maruti suzuki",
                id : ""
            },
            {
                img : "img-icon/mercedes-benz.webp",
                name :  "Mercides",
                id : ""
                
            },
            {
                img : "img-icon/maruti.webp",
                name :  "maruti suzuki",
                id : ""
            },
            {
                img : "img-icon/mercedes-benz.webp",
                name :  "Mercides",
                id : ""
            },
            {
                img : "img-icon/maruti.webp",
                name :  "maruti suzuki",
                id : ""
            },
            {
                img : "img-icon/mercedes-benz.webp",
                name :  "Mercides",
                id : ""                
            },
            {
                img : "img-icon/maruti.webp",
                name :  "maruti suzuki",
                id : ""
            },
            {
                img : "img-icon/mercedes-benz.webp",
                name :  "Mercides",
                id : "slidelast"
            },
        ]
    }
    // car stories //
    let carStories = {
        visualStory : [
            {
             
                img : "https://stimg.cardekho.com/images/cms/webstory/webstory_6423028b49bd6.jpg",
                detail : "Shahrukh Khan Gets A New <br> Rs 10 Crore SUV"
            },
            {
                img : "https://stimg.cardekho.com/images/cms/webstory/webstory_6423028b49bd6.jpg",
                detail : "Shahrukh Khan Gets A New <br> Rs 10 Crore SUV"
            },
            {
                img : "https://stimg.cardekho.com/images/cms/webstory/webstory_6423028b49bd6.jpg",
                detail : "Shahrukh Khan Gets A New <br> Rs 10 Crore SUV"
            },
            {
                img : "https://stimg.cardekho.com/images/cms/webstory/webstory_6423028b49bd6.jpg",
                detail : "Shahrukh Khan Gets A New <br> Rs 10 Crore SUV"
            },
            {
                img : "https://stimg.cardekho.com/images/cms/webstory/webstory_6423028b49bd6.jpg",
                detail : "Shahrukh Khan Gets A New <br> Rs 10 Crore SUV"
            },
            {
                img : "https://stimg.cardekho.com/images/cms/webstory/webstory_6423028b49bd6.jpg",
                detail : "Shahrukh Khan Gets A New <br> Rs 10 Crore SUV"
            },
            {
                img : "https://stimg.cardekho.com/images/cms/webstory/webstory_6423028b49bd6.jpg",
                detail : "Shahrukh Khan Gets A New <br> Rs 10 Crore SUV"
            },
        ]
    }
    // compare cars //
    let compareCar = {
        compare : [
            {
                img : "images/compare1.avif",
                brand : "Tata",
                carName : "New Safari",
                carPrice : "Rs.15.65 - 25.02 Lakh",
                img2 : "images/compare2.webp",
                brand2 : "Mahindra",
                carName2 : "XUV700",
                carPrice2 : "Rs.13.95 - 25.48 Lakh " ,
                btn : "Know more",
                vs : 'VS'
            },
            {
                img : "images/compare1.avif",
                brand : "Tata",
                carName : "New Safari",
                carPrice : "Rs.15.65 - 25.02 Lakh",
                img2 : "images/compare2.webp",
                brand2 : "Mahindra",
                carName2 : "XUV700",
                carPrice2 : "Rs.13.95 - 25.48 Lakh",
                btn : "Know more",
                vs : 'VS'
            },
            {
                img : "images/compare1.avif",
                brand : "Tata",
                carName : "New Safari",
                carPrice : "Rs.15.65 - 25.02 Lakh ",
                img2 : "images/compare2.webp",
                brand2 : "Mahindra",
                carName2 : "XUV700",
                carPrice2 : "Rs.13.95 - 25.48 Lakh ",
                btn : "Know more",
                vs : 'VS'
            },
            {
                img : "images/compare1.avif",
                brand : "Tata",
                carName : "New Safari",
                carPrice : "Rs.15.65 - 25.02 Lakh ",
                img2 : "images/compare2.webp",
                brand2 : "Mahindra",
                carName2 : "XUV700",
                carPrice2 : "Rs.13.95 - 25.48 Lakh ",
                btn : "Know more",
                vs : 'VS'
            },
            {
                img : "images/compare1.avif",
                brand : "Tata",
                carName : "New Safari",
                carPrice : "Rs.15.65 - 25.02 Lakh ",
                img2 : "images/compare2.webp",
                brand2 : "Mahindra",
                carName2 : "XUV700",
                carPrice2 : "Rs.13.95 - 25.48 Lakh ",
                btn : "Know more",
                vs : 'VS'
            }
        ],
    }
    // compare cars //
let compareCardata;
for(let i = 0; i < compareCar.compare.length;i++){
    compareCardata = document.querySelector("#compareCars .sys-grid");
    compareCardata.innerHTML += `
    <div class="col ms-2 relative">
        <div class="sys-grid">
            <img src="${compareCar.compare[i].img}">
            <img src="${compareCar.compare[i].img2}">      
        </div>  
        <div class="sys-grid">
            <div class="detail">
                <p>${compareCar.compare[i].brand}</p>
                <h6>${compareCar.compare[i].carName}</h6>
                <strong>${compareCar.compare[i].carPrice}</strong>
            </div>
            <div class="detail ms-3">
                <p>${compareCar.compare[i].brand2}</p>
                <h6>${compareCar.compare[i].carName2}</h6>
                <strong>${compareCar.compare[i].carPrice2}</strong>
            </div>     
        </div>
        <div>
            <button class="sys-btn-outline-error btn-width mt-3" type="button" role="button
            ">${compareCar.compare[i].btn}</button>
        </div>
        <div class="mid">
            <span>${compareCar.compare[i].vs}</span>
        </div>
    </div>
    `    
}  
let reviewsData;
for(let i = 0; i < reviews.expertReviews.length;i++){
    reviewsData = document.querySelector("#Reviews .sys-row");
    reviewsData.innerHTML += `
    <div class="col-md-6 shado mt-3 ">
        <div class="sys-row">
            <div class="col-md-6">
                <img src="${reviews.expertReviews[i].img}" alt="">
            </div>
            <div class="col-md-6">
                <div class="style">
                    <strong>${reviews.expertReviews[i].name}</strong> 
                    <p>${reviews.expertReviews[i].detail}</p>
                    <div class="sys-row">
                        <div class="col-md-2">
                            <span class="pill">${reviews.expertReviews[i].data}</span>
                        </div>
                        <div class="col-md-10">
                            <span>${reviews.expertReviews[i].data1}</span>
                            <p>${reviews.expertReviews[i].date}</p> 
                        </div>   
                    </div>
                </div>
            </div>  
        </div>  
    </div>
    `
}
let storyData;
for(let i = 0; i < story.fStories.length; i++){
    storyData = document.querySelector('#Stories .sys-row');
    storyData.innerHTML += `
    <div class="col-md-6 shado">
        <div class="sys-row">
            <div class="col-md-6">
                <img src="${story.fStories[i].img}" alt="">
            </div>
            <div class="col-md-6">
            <div class="style">
                <strong>${story.fStories[i].name}</strong> 
                <p>${story.fStories[i].detail}</p>
                <div class="sys-row">
                    <div class="col-md-2">
                        <span class="pill">${story.fStories[i].data}  </span>
                    </div>
                    <div class="col-md-10">
                        <span>${story.fStories[i].data1}</span>
                        <p>${story.fStories[i].date}</p> 
                    </div>   
                </div>
            </div>
        </div>  
    </div>
    `
}
// videos //
let videoData;
for(let i = 0; i < videos.carVideos.length;i++){
    videoData = document.querySelector("#video .sys-row");
    videoData.innerHTML += `
    <div class="col-md-6">
        <div class="sys-grid shado mt-3 ">
            <div class="col">
                <iframe width="560" height="315" src="${videos.carVideos[i].img}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
            </div>
            <div class="col">
                <h4>${videos.carVideos[i].detail}</h4>
                <p class="date">${videos.carVideos[i].date}</p>
            </div>
        </div>
 </div>    
    `

}


// let array = [];
// array.push({allcars});
// console.log(array);

// let array = [];
// array.push(['cars']);
// console.log('array');

let hatchbackData;
for(let i = 0; i < allcars.hatchback.length; i++){  
    let hatchbackData = document.querySelector('#Hatchback .sys-grid');
    hatchbackData.innerHTML += `
    <div class="col card sys-elevation-v3" id="${allcars.hatchback[i].id}">
        <div class="">
            <img src="${allcars.hatchback[i].img}" alt="">
        </div>
        <ul>
            <li>
                <div class="carN">
                    <span>${allcars.hatchback[i].name}</span>
                </div>
            </li>
            <li>
                <div class="carC">
                    <span>${allcars.hatchback[i].color}</span>
                </div>
            </li>
            <li>
                <div class="carP">
                    <span>${allcars.hatchback[i].price}</span>
                </div>
            </li>
        </ul>
            <button class="sys-btn-outline-error cover" type="button" role="button
            ">${allcars.hatchback[i].btns}</button>   
    </div>`       
    };

// sedan //

let sadandata;
for(let s = 0; s < allcars.sadan.length; s++){
        let sadandata = document.querySelector('#Saden .sys-grid');
        sadandata.innerHTML +=  `
        <div class="col card sys-elevation-v3"">
            <div class="">
                <img src="${allcars.sadan[s].img}" alt="">
            </div>
            <ul>
                <li>
                    <div class="carN">
                        <span>${allcars.sadan[s].name}</span>
                    </div>
                </li>
                <li>
                <div class="carC">
                    <span>${allcars.sadan[s].color}</span>
                </div>
                </li>
                <li>
                    <div class="carP">
                        <span>${allcars.sadan[s].price}</span>
                    </div>
                </li>
            </ul>
            <button class="sys-btn-outline-error cover" type="button" role="button
            ">${allcars.sadan[s].btns}</button>
            </div> `
 };

//  SUV //

let suvData;
for(let a = 0; a < allcars.suv.length; a++){
        let suvData = document.querySelector('#suv .sys-grid');
        suvData.innerHTML += `
        <div class="col  card sys-elevation-v3"">
            <div class="">
                <img src="${allcars.suv[a].img}" alt="">
            </div>
            <ul>
                <li>
                    <div class="carN">
                        <span>${allcars.suv[a].name}</span>
                    </div>
                </li>
                <li>
                <div class="carC">
                    <span>${allcars.suv[a].color}</span>
                </div>
                </li>
                <li>
                    <div class="carP">
                        <span>${allcars.suv[a].price}</span>
                    </div>
                </li>
            </ul>
        <button class="sys-btn-outline-error cover" type="button" role="button
        ">${allcars.suv[a].btns}</button>
        </div>`  
 };
        
//  MUV //

let muvData;
for(let m = 0; m < allcars.muv.length; m++){
        let muvData = document.querySelector('#muv .sys-grid');
        muvData.innerHTML += `
        <div class="col card sys-elevation-v3"">
            <div class="">
                <img src="${allcars.muv[m].img}" alt="">
            </div>
            <ul>
                <li>
                    <div class="carN">
                        <span>${allcars.muv[m].name}</span>
                    </div>
                </li>
                <li>
                <div class="carC">
                    <span>${allcars.muv[m].color}</span>
                </div>
                </li>
                <li>
                    <div class="carP">
                        <span>${allcars.muv[m].price}</span>
                    </div>
                </li>
            </ul>
            <button class="sys-btn-outline-error cover" type="button" role="button
            ">${allcars.muv[m].btns}</button>
            </div> `
 };

//  form validation //

function validation(){
    let emptyy = document.getElementById('emptyy');   
    let change = document.getElementById('change');

   if(emptyy.value !== ''){
    change.style.backgroundColor = 'red';
   }else{
    console.log('failed');
   }
   
}

//hover functanility //

let arrowTrig = document.getElementById('arrow-Trig');
for(let p = 0; p > arrowTrig.length; p++){
    arrowTrig[p].addEventListener('click' , function(){
       alert(arrowTrig);
    })
}

// let newCar = document.getElementById('newCar');
let usedCar = document.getElementById('usedCar');

// selection//
let selectPrices = document.getElementsByClassName('selectBudget');
let selectcity = document.getElementById('city').style.display = 'none';
let vehicleTypes =document.getElementById('carTypes');
let carBrands = document.getElementById('brands').style.display = 'none';
let selectModel = document.getElementById('model').style.display = "none";
let dataControl = document.getElementById('dataControl');
let newCar = document.getElementById('newCar');

// for (let i = 0; i < newCar.length; i++){
//     newCar[i].addEventListener('click' , function(){
      
//     })
// }

let carouselControl = document.getElementById('carouselControl');
let triggerbtn = carouselControl.getElementsByClassName('carausalTrig');
for(let i = 0; i < triggerbtn.length; i++){
    triggerbtn[i].addEventListener('click' , function(){
        let css = document.getElementsByClassName('myStyle');
        css[0].className = css[0].className.replace('myStyle', 'gray');
        this.className = 'myStyle';
    })
}
// icon data //
let iconData;
for(let c = 0; c < car.carIcon.length; c++){
    let iconData = document.querySelector('#icons .sys-grid');
    iconData.innerHTML += `
                       <div id="${car.carIcon[c].id}">
                            <ul class="sys-navbar">
                                <li>
                                    <img src="${car.carIcon[c].img}" alt="">
                                    <p>${car.carIcon[c].name}</p>
                                </li>
                            </ul>    
                       </div>
    `
}
// latest Cars //
let latestcarData;
for(let i = 0; i < latestcar.car.length; i++){
    let latestcarData = document.querySelector('#latestcar .sys-grid');
    latestcarData.innerHTML += `
    <div class="col card sys-elevation-v3" id="${latestcar.car[i].id}">
    <div class="">
        <img src="${latestcar.car[i].img}" alt="">
    </div>
    <ul>
        <li>
            <div class="">
                <p>${latestcar.car[i].name}</p>
                <p>${latestcar.car[i].price}</p>
            </div>
        </li>
        <li>
            <div>
                <button class="sys-btn-outline-error cover " type="button" role="button">Check Aprail Offer</button>
            </div>
        </li>
    </ul> 
</div>
    `
}
// upcoming Cars //
let upcomingCarData;
for(let v = 0; v < upComingcar.cars.length; v++){
     upcomingCarData = document.querySelector('#upCar .sys-grid');
    upcomingCarData.innerHTML += `
    <div class="col card sys-elevation-v3" id="${upComingcar.cars[v].id}">
        <div class="">
            <img src="${upComingcar.cars[v].img}" alt="">
        </div>
        <ul>
            <li>
                <div class="">
                    <p>${upComingcar.cars[v].name}</p>
                    <p>${upComingcar.cars[v].price}</p>
                </div>
            </li>
            <li>
                <div>
                    <button class="sys-btn-outline-error cover " type="button" role="button">Check Aprail Offer</button>
                </div>
            </li>
        </ul> 
    </div>
    `
}
// car Story //
let carStoryData;
for(let i = 0; i < carStories.visualStory.length; i++){
  let carStoryData = document.querySelector('#story .sys-grid');
    carStoryData.innerHTML +=
    `
    <div class="col card sys-elevation-v3 relative">
        <a href="https://www.cardekho.com/web-stories/shahrukh-khan-gets-a-new-rs-10-crore-suv-195.htm" target="_blank">
        <img src="${carStories.visualStory[i].img}">
        <div class="storyDetail"><p>${carStories.visualStory[i].detail}</p></div></a>   
</div>
    `
}


