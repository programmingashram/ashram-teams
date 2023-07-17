// using this Keywords //

let address = {
    name : "Harsh",
    LastName : "Sancheti",
    mobile : "8889943619",
    fulladdress : function()

{
    return this.name+ " " +this.LastName+ " " +this.mobile;
}

}

let data = address.fulladdress()
console.log(data);

// js Hoisting //

// x = 10;  
// document.write(x);  
// let  x;  

function compare()  
{  
var d1=new Date('2020-01-23'); //yyyy-mm-dd  
var d2=new Date('2020-01-21'); //yyyy-mm-dd  
if(d1>d2)  
{  
document.write("True, First date is greater than second date");  
}  
else if(d1<d2)  
{  
document.write("False, Second date is smaller than the first");  
}  
else  
{  
document.write("Both date are same and equal");  
}  
}  
compare(); //invoking compare()  

