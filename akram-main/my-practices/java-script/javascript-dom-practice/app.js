// alert("Hello World!!");
// console.log("Hello World");
// document.write("Hello World");


// DOM - Document Object Modal

// document.getElementById('logo').style.color = "blue";
// document.write(Date());




// BOM - Browser Object Modal
//my work
// document.getElementById('head').innerHTML = `
// <div class="container">
//     <div class="row">
//         <div class="col-md-6">
//              <a herf="#">JAVA SCRIPT</a>
//         </div>
//         <div class="col-md-6">
//              <ul>
//                 <li>
//                      <a herf="#" id="data">DOCUMENT</a>
//                 </li>
//                 <li>
//                     <a herf="#">ABOUT</a>
//                 </li>
//                 <li>
//                     <a herf="#">CONTACT US</a>
//                  </li>
//              </ul>
//          </div>
//     </div>
// </div>
// `;
document.getElementById('nav').innerHTML = `
<div class="container">
    <div class="row mt-3">
        <div class="col-md-2 text-center">
             <h4>
                8 Pillar
            </h4>
            <h6>
                  BY
             </h6>
            <h6>
                 SHAKTI BENEFICIATION
             </h6>
        </div>
        <div class="col-md-8">
            <ul class="nav-bar nav">
                <li class="nav-item">
                    <a href="#about" class="nav-link text-light">SERVICES</a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link text-light">OUR ROOMS</a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link text-light">PACKAGES</a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link text-light">WHY US</a>
                </li>
                <li class="nav-item">
                    <a href="" class="nav-link text-light">CONTACT US</a>
                </li>
            </ul>
        </div>
        <div class="col-md-2">
            <button type="button" class="btn btn-danger">GET QUOTES</button>
        </div>
    </div>                 
</div>
  `;
document.getElementById('section').innerHTML = `
    <div class="c">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="https://images6.alphacoders.com/746/746488.jpg" class="d-block w-100" id="img" alt="...">
            <div class="carousel-caption d-none d-md-block">
            <h1 class="title">Making <b>Dreams </b>Come to <b>Life</b>.</h1>
            <p></p>
            <ul>
                <li>
                <a class="btn btn-info " href="#">BOOK PLOT INSPECTION</a>
                </li>
                <li>
                <a class="btn btn-danger" href="#">OUR Packages</a>
                </li>
             </ul>
            </div>
        </div>
        <div class="carousel-item ">
            <img src="https://as1.ftcdn.net/v2/jpg/01/95/76/70/1000_F_195767084_glkqlYQkN7pSFM2AIs5b5zfzMUYPJuNp.jpg" class="d-block w-100"id="img"  alt="...">
            <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p></p>
            <ul>
                <li>
                <a class="btn btn-info " href="#">BOOK PLOT INSPECTION</a>
                </li>
                <li>
                <a class="btn btn-danger" href="#">OUR Packages</a>
                </li>
             </ul>
            </div>
        </div>
        <div class="carousel-item">
            <img src="https://w0.peakpx.com/wallpaper/205/649/HD-wallpaper-hotel-room-interior-design-luxury-hotel-apartments-modern-interior-design-classic-style-luxury-chandelier.jpg" class="d-block w-100" id="img"  alt="...">
            <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p></p>
            <ul>
                <li>
                <a class="btn btn-info " href="#">BOOK PLOT INSPECTION</a>
                </li>
                <li>
                <a class="btn btn-danger" href="#">OUR Packages</a>
                </li>
             </ul>
            </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
    </button>
</div>
    </div>
`;
document.getElementById('article').innerHTML = `
    <div class="width">
        <span class="bolt">Looking To Construct A Home? Find Out What It Costs.</span>
    </div>
    <div class="text-center action position-absolute w-100">
        <button type="button" class="btn-dark btn custom">
            GET A FREE ESTIMATE NOW
        </button>
    </div>
`;


document.getElementById("article").style.backgroundColor = "rgba(228,110,91,1)";

document.getElementById("article").style.padding = "60px 0px";
document.getElementsByClassName("bolt")[0].style.fontSize = "40px";
document.getElementsByClassName("bolt")[0].style.color = "white";
document.getElementsByClassName("width")[0].style.textAlign = "center";
//for span custom class
document.getElementsByClassName("custom")[0].style.padding = "10px 20px";
document.getElementsByClassName("custom")[0].style.border = "2px solid white";


document.getElementById('content').innerHTML = `
    <div class="container text-center">
        <div>
            <h1><b>All Construction Needs Under One Roof!</b></h1>
            <p>The array of home building professionals under the same roof.</p>
            <p>We are team of licensed & reputed engineers, turnkey contractors, interior designers & renovators.</p>
        </div>
        <div class="row">
        <div class="col-md-3">
        <div class="sys-card" style="width: 18rem;">
            <div class="sys-card-header">
                <h2>Card Title</h2>
            </div>
            <div class="sys-card-img">
                <img src="https://tse4.mm.bing.net/th?id=OIP.gqm7EWpO9pcs1KvnmVP32AAAAA&pid=Api&P=0" alt="" style="width: 18rem;">
            </div>
            <div class="sys-card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia iusto ad esse a, eligendi quos necessitatibus exercitationem. Voluptas pariatur sunt, maiores dolorum beatae eaque et delectus enim necessitatibus! Pariatur, repellat!
            </div>
            <div class="sys-card-footer">
                <a href="" class="sys-btn-outline-accent">
                    Explore
                </a>
            </div>
        </div>
     </div>
            <div class="col-md-3">
                <div class="sys-card" style="width: 18rem;">
                    <div class="sys-card-header">
                        <h2>Card Title</h2>
                    </div>
                    <div class="sys-card-img">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.gqm7EWpO9pcs1KvnmVP32AAAAA&pid=Api&P=0" alt="" style="width: 18rem;">
                    </div>
                    <div class="sys-card-body">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia iusto ad esse a, eligendi quos necessitatibus exercitationem. Voluptas pariatur sunt, maiores dolorum beatae eaque et delectus enim necessitatibus! Pariatur, repellat!
                    </div>
                    <div class="sys-card-footer">
                        <a href="" class="sys-btn-outline-accent">
                            Explore
                        </a>
                    </div>
                </div>
             </div>
             <div class="col-md-3">
             <div class="sys-card" style="width: 18rem;">
                 <div class="sys-card-header">
                     <h2>Card Title</h2>
                 </div>
                 <div class="sys-card-img">
                     <img src="https://tse4.mm.bing.net/th?id=OIP.gqm7EWpO9pcs1KvnmVP32AAAAA&pid=Api&P=0" alt="" style="width: 18rem;">
                 </div>
                 <div class="sys-card-body">
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia iusto ad esse a, eligendi quos necessitatibus exercitationem. Voluptas pariatur sunt, maiores dolorum beatae eaque et delectus enim necessitatibus! Pariatur, repellat!
                 </div>
                 <div class="sys-card-footer">
                     <a href="" class="sys-btn-outline-accent">
                         Explore
                     </a>
                 </div>
             </div>
          </div>
          <div class="col-md-3">
          <div class="sys-card" style="width: 18rem;">
              <div class="sys-card-header">
                  <h2>Card Title</h2>
              </div>
              <div class="sys-card-img">
                  <img src="https://tse4.mm.bing.net/th?id=OIP.gqm7EWpO9pcs1KvnmVP32AAAAA&pid=Api&P=0" alt="" style="width: 18rem;">
              </div>
              <div class="sys-card-body">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia iusto ad esse a, eligendi quos necessitatibus exercitationem. Voluptas pariatur sunt, maiores dolorum beatae eaque et delectus enim necessitatibus! Pariatur, repellat!
              </div>
              <div class="sys-card-footer">
                  <a href="" class="sys-btn-outline-accent">
                      Explore
                  </a>
              </div>
          </div>
       </div>
        </div>
    </div>
`;
document.getElementById("content").style.marginTop = "95px";
document.getElementById('web-img').innerHTML = `
<div>
    <img src="http://www.8pillars.in/assets/images/hiw.jpg" class="col">
</div>
`;
document.getElementById('article-content').innerHTML = `
<div class="container text-center">
    <div>
        <h1>Our Works</h1>
        <p>We bring the expertise required to create stylish and well-designed residences based on individual needs & requirements. Have a look at some of our projects in Bilaspur, Chhattisgarh.</p>
    </div>
     <div class="row">
         <div class="col-md-6">
            <div class="flip-card position-relative">
                <img src="http://www.technocrazed.com/wp-content/uploads/2015/12/Home-Wallpaper-20.jpg" class="img-grid">
                <div class="flip-content position-absolute top-0">
                    <h3>Mr. Akram Khan</h3>
                </div>
            </div>
         </div>
        <div class="col-md-6">
            <div class="flip-card position-relative">
                 <img src="https://cdn.wallpapersafari.com/27/74/XtkN6u.jpg" class="img-grid"> 
                <div class="flip-content position-absolute top-0">
                <h3>Mr. Akram Khan</h3>
                </div> 
            </div>   
        </div>
     </div>
    <div class="row  mt-3">
        <div class="col-md-6">
             <div class="flip-card position-relative">
                 <img src="https://cdn.wallpapersafari.com/27/74/XtkN6u.jpg" class="img-grid">
        
                    <div class="flip-content position-absolute top-0">
                    <h3>Mr. Akram Khan</h3>
                    </div>
             </div> 
        </div>
        <div class="col-md-6">
            <div class="flip-card position-relative">
                <img src="http://www.technocrazed.com/wp-content/uploads/2015/12/Home-Wallpaper-20.jpg" class="img-grid">
           
                <div class="flip-content position-absolute top-0">
                    <h3>Mr. Akram Khan</h3>
                </div>
            </div>
        </div>
    </div>
</div>
`;
var body = document.getElementById("body");
var article = document.createElement('article');
var container = document.createElement('div')

body.append(article);

article.setAttribute('id','article03');

var body = document.getElementById("body");
var aside = document.createElement('aside');
var container = document.createElement('div')