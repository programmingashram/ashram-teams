// let x = 11;
// let y = 10;

// if(x === y){
//     console.log('false');
// }else{
//     console.log('true');
// }

// // oprators//
// // assigment oprators

// let a = 5;
// let b = 1;
// let z = a + b;

// console.log(z);

// let c = 10;
// c--;
// console.log(c);

// let h = 10;
// h /= 5;
// console.log(typeof(h));

// // bollen//
// let j = 10;
// let k =  3;
// let l = 3;

// console.log( k == l);

// // // let n = 6;
// // // let q = 10;
// // // if(n != q  ){
// // //     console.log('false');
// // // }
// // // else{ 
// // //     console.log('true');
// // }   

// let n = "5";
// let q = 5;
// if(n >= q){
//     console.log('correct');
// }else{
//     console.log('incorrect');
// }
// // DOM//
let body = document.getElementById('body'); 
let header = document.createElement('header');
body.appendChild(header);
let headingTag = document.createElement('h1');
headingTag.innerHTML = "Hii I am Heading!! ";

header.appendChild(headingTag);
let para = document.createElement('p');
header.appendChild(para);
para.innerHTML = "Hii I am para!!";
header.appendChild(para);
console.log()
headingTag.appendChild(para);

let x = 10;
let y = 20;
let z = x + y;
console.log(z);

let a = 5;
let d = 10;
if(x == y){
    console.log('correct');
}else{
    console.log('incorrect');
}

let ab = '50';
let da = '10';
if(x !== y){
    console.log('correct');
}else{
    console.log('incorrect');
}

let abc = '50';
let dab = '10';
if(x === y){
    console.log('correct');
}else{
    console.log('incorrect');
}

let abcd = '50';
let adab = '10';
if(x != y){
    console.log('correct');
}else{
    console.log('incorrect');
}

let abd = '50';
let aab = '10';
if(abd <= aab){
    console.log('correct');
}else{
    console.log('incorrect');
}


