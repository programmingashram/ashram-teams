let header = document.createElement("header");
document.body.appendChild(header);
header.setAttribute("class" , "bg-color");



const myString = "Hello, world!";
console.log(myString.split(" ")); // Output: 7

const myComment = document.createComment('This is a comment');
header.appendChild(myComment);
// // // DOM//
// let body = document.getElementById('body'); 
// let header = document.createElement('header');
// body.appendChild(header);
// let headingTag = document.createElement('h1');
// headingTag.innerHTML = "Hii I am Heading!! ";

// header.appendChild(headingTag);
// let para = document.createElement('p');
// header.appendChild(para);
// para.innerHTML = "Hii I am para!!";
// header.appendChild(para);
// console.log()
// headingTag.appendChild(para);

// let x = document.getElementById("body");
// let nav = document.createElement('nav');
// body.appendChild('nav');
// console.log(nav);


// let x = "harsh";
// let y = 22;
// function test1(){
//     function childfn(){
//         console.log("hello"+' '+ x +' '+" your age is "+ y);
//     }
//     childfn();
// }
// test1();

// function header(){
//     let header = document.createElement('header');
//     document.body.appendChild(header);
//     let container = document.createElement('div');
//     header.appendChild(container);
//     let row = document.createElement('div');
//     container.appendChild(row);
//     let col1 = document.createElement('div');
//     row.appendChild(col1);
//     col2 = document.createElement('div');
//     row.appendChild(col2);


//    container.setAttribute('class','container');
//    row.setAttribute('class','row');
//    col1.setAttribute('class','col-md-6');
//    col2.setAttribute('class', 'col-md-6');
//    col2.setAttribute('class', 'col-md-6');


//    col1.innerHTML = `<h1>I am harsh from waraseoni</h1>`;
//    col2.innerHTML =  `<h1><i class="fa-brands fa-facebook"></i></h1>`
  


    
//    header.style.background = 'red';
//    header.style.color = 'white';
    
// }
// header();

// function nav(){
//     let nav , container , row , col1 , col3;
//     nav = document.createElement('nav');
//     container = document.createElement('div');
//     row  = document.createElement('div');
//     col1 = document.createElement('div');
//     col3 = document.createElement('div');
  

//     document.body.appendChild(nav);
//     nav.appendChild(container);
//     container.appendChild(row);
//     row.appendChild(col1);
//     row.appendChild(col3);

//     container.setAttribute('class','container' )
//     row.setAttribute('class','row' )
//     col1.setAttribute('class','col-md-6' )
//     col3.setAttribute('class','col-md-3 ' )

//     col1.innerHTML = `<div><img src="images/logo.png"></div>`;
//     col3.innerHTML =
//     `<ul class="nav">
//         <li class="nav-item">
//             <a class="nav-link text-white">
//                 Home
//             </a>
//         </li>
//         <li class="nav-item ">
//             <a class="nav-link text-white">
//             Home
//             </a>
//         </li>
//         <li class="nav-item ">
//             <a class="nav-link text-white">
//             Home
//             </a>
//         </li>

//     </ul>`;

//     nav.style.color = 'white';
//     nav.style.background = '#76c7c0';

// }
// nav();

// function section(){
//     let section = document.createElement('section');
//     document.body.appendChild(section);
//     let div = document.createElement('div');
//     section.appendChild(div);
    
//     // section.setAttribute('class',);
    
//     section.innerHTML = `<div><img src="images/fr.jpg" class="w-100"></div>`;

// }
// section();