function navbar(){
     var Navvar=document.querySelector("#navbar");
     
     var arry=["Home","About", "Services", "Our Gallery", "contact us"];
        for(i=0; i<arry.length; i++){
            Navvar.innerHTML+=`
                <li>${arry[i]}</li>
            `;
        }
}
navbar();

function footerN(){
    var Manish=document.querySelector("#footernav");
    console.log(Manish);

    var arryone=["Home", "About Us","Book an Appointment","Contact Us"];
        linkone=["http://adhishreedentalclinic.com/index.html","http://adhishreedentalclinic.com/about.html","http://adhishreedentalclinic.com/service-1.html","http://adhishreedentalclinic.com/gallery.html","http://adhishreedentalclinic.com/contact.html"];
    for(var x=0; x<arryone.length; x++){
        Manish.innerHTML+=`
        <li><a href="${linkone[x]}">${arryone[x]}</a></li>
    `;
    }
}
footerN();


function social(){
    var media=document.querySelector("#Smidia");
    console.log(media);

    var arrytwo=["Twitter","Facebook","Pintrest","Linkedin","Thumblr","Email"];
        link=["www.twitter.com","www.facebook.com","www.pintrest.com","www.linkedin.com","www.thumblr.com","www.gmail.com"];
    for(var y=0; y<arrytwo.length; y++){
        media.innerHTML+=
        ` <li><a href="${link[y]}">${arrytwo[y]}</a></li>
        `;
    }
}
social();

function adrr(){
    var adder=document.querySelector("#address");
    console.log(adder);
}