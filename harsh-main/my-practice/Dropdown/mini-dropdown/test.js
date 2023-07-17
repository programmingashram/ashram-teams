// const searchInput = document.getElementById('search-bar');
// const items = document.querySelectorAll('.item');

// searchInput.addEventListener('keyup', () => {
//   const query = searchInput.value.toUpperCase();

//   items.forEach(item => {
//     const text = item.textContent.toUpperCase();

//     if (text.includes(query)) {
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });
// });




// const searchInput = document.getElementById('search-bar');
// const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// searchInput.addEventListener('keyup', () => {
//   const query = searchInput.value.toLowerCase();
  
//   checkboxes.forEach(checkbox => {
//     const label = checkbox.nextElementSibling.textContent.toLowerCase();
    
//     if (label.includes(query)) {
//       checkbox.parentNode.style.display = 'block';
//     }else{
//       checkbox.parentNode.style.display = 'none';
//     }
//   });
// });


// Get the check-in and check-out dates from the form

// function applyFilters() {
//   var filter1 = document.getElementById("filter1").checked;
//   var filter2 = document.getElementById("filter2").checked;
//   var filter3 = document.getElementById("filter3").checked;
  
//   // Apply filters to your data
  
//   var filteredData = data.filter(function(item) {
//       if (filter1 && !item.hasFilter1) {
//           return false;
//       }
      
//       if (filter2 && !item.hasFilter2) {
//           return false;
//       }
      
//       if (filter3 && !item.hasFilter3) {
//           return false;
//       }
      
//       return true;
//   });
  
//   // Display filtered data
//   displayData(filteredData);
// }
// function colorCheak(){
//     let cheakItem = document.getElementsByClassName('items');
//     for(i=0; i < cheakItem.length;i++){
//         cheakItem[i].addEventListener('change', ()=>{
//             if(cheakItem[i].checked = true){
//                console.log(cheakItem[i].value);
//             }
//             else{
//                 console.log("failed");
//             }
//         })
//     }

// }
// colorCheak();

// an example array of prices
var prices = [10.99, 29.99, 5.99, 19.99, 3.99];
var prices = [10.99, 29.99, 5.99, 19.99, 4.99];
var prices = [10.99, 29.99, 5.99, 19.99, 3.99];
var prices = [10.99, 29.99, 5.99, 19.99, 3.99];

// use the sort() method to sort the prices from low to high
prices.sort(function(a, b) {
  return a - b;
});

// print the sorted prices
console.log(prices);

let Harsh = document.getElementById("harsh"); 
let sec9 = new Harsh("img/r-8.webp","Roadstar","Mens Cotton Pure Cotton Brown T-shirt","Rs 199","Rs.500","(50% off)");
console.log("sec9");