var header = document.getElementById('header');

var container = document.createElement('div');

var row = document.createElement('div');

header.appendChild(container);
container.setAttribute('class', 'container');


container.appendChild(row);
row.setAttribute('class', 'row');

row.innerHTML = `
<div class="logo-img">
        <img src="image/myntra.png" alt="myntra logo" class="m-logo">
    </div>
    <ul class="head-menu">
        <li class="drop-bar">
            <a href="#" class="nav-link active">MEN</a>
            <div class="drop-menu">
                <div class="drop-top">
                    <div class="col-4">
                        <div class="drop-col">
                            <p class="drop-heading">Topwear</p>
                            <ul class="drop-ul">
                                <li class="drop-li">
                                    <a href="" class="drop-link">T-Shirts</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Casual Shirts</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Formal Shirts</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">SweatShirts</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Sweaters</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Jackets</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Blazers & Coats</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Suits</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Rain Jackets</a>
                                </li>
                            </ul>
                            <div class="line"></div>
                            <p class="drop-heading">Indian & Festive Wear</p>
                            <ul class="drop-ul">
                                <li class="drop-li">
                                    <a href="" class="drop-link">Kurtas & Kurta Sets</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Sherwanis</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Nehru Jackets</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Dhotis</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="drop-col">
                            <p class="drop-heading">Bottomwear</p>
                            <ul class="drop-ul">
                                <li class="drop-li">
                                    <a href="" class="drop-link">Jeans</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Casual Trousers</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Formal Trousers</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Shorts</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Track Pants & Joggers</a>
                                </li>
                            </ul>
                            <div class="line"></div>
                            <p class="drop-heading">Innerwear & Sleepwear</p>
                            <ul class="drop-ul">
                                <li class="drop-li">
                                    <a href="" class="drop-link">Briefs & Trunks</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Boxers</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Verts</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Sleepwear & Loungewear</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Thermals</a>
                                </li>
                            </ul>
                            <p class="drop-heading">Plus Size</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="drop-col">
                            <p class="drop-heading">Footwear</p>
                            <ul class="drop-ul">
                                <li class="drop-li">
                                    <a href="" class="drop-link">Casual Shoes</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Sports Shoes</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Formal Shoes</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Sneakers</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Sandals & Floaters</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Flip & Flops</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Socks</a>
                                </li>
                            </ul>
                            <div class="line"></div>
                            <p class="drop-heading">Personal Care & Grooming</p>
                            <p class="drop-heading">Sunglasses & Frames</p>
                            <p class="drop-heading">Watches</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="drop-col">
                            <p class="drop-heading">Sports & Active Wear</p>
                            <ul class="drop-ul">
                                <li class="drop-li">
                                    <a href="" class="drop-link">Sports Shoes</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Sports Sandals</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Active T-Shirts</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Track Pants & Shorts</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Tracksuits</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Jackets & SweatShirts</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Sports Accessories</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Swimwear</a>
                                </li>
                            </ul>
                            <div class="line"></div>
                            <p class="drop-heading">Gadgets</p>
                            <ul class="drop-ul">
                                <li class="drop-li">
                                    <a href="" class="drop-link">Smart Wearables</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Fitness Gadgets</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Headphones</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Speakers</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="drop-col">
                            <p class="drop-heading">Fashion Accessories</p>
                            <ul class="drop-ul">
                                <li class="drop-li">
                                    <a href="" class="drop-link">Wallets</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Belts</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Perfumes & Body Mists</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Trimmers</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Deodorants</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Ties, Cufflinks & Pocket Squares</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Accessory Gift Set</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Caps & Hats</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Mufflers, Scarves & Gloves</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Phone Cases</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Rings & Wristwear</a>
                                </li>
                                <li class="drop-li">
                                    <a href="" class="drop-link">Helmetes</a>
                                </li>
                            </ul>
                            <div class="line"></div>
                            <p class="drop-heading">Bags & Backpacks</p>
                            <p class="drop-heading">Luggages & Trolleys</p>
                        </div>
                    </div>

                </div>
            </div>

        </li>
        <li>
            <a href="#" class="nav-link">WOMEN</a>
        </li>
        <li>
            <a href="#" class="nav-link">KIDS</a>
        </li>
        <li>
            <a href="#" class="nav-link">HOME & LIVING</a>
        </li>
        <li>
            <a href="#" class="nav-link">BEAUTY</a>
        </li>
        <li>
            <a href="#" class="nav-link">STUDIO</a>
        </li>
    </ul>
    <div class="search-bar">
        <i class="fa-solid fa-magnifying-glass search-i"></i>
        <input type="text" placeholder="Search for products, brands and more" class="input-s">
    </div>
    <div class="row">
        <div class="top-icon">
            <i class="fa-regular fa-user"></i>
            <p>Profile</p>
        </div>
        <div class="top-icon">
            <i class="fa-regular fa-heart"></i>
            <p>Wishlist</p>
        </div>
        <div class="top-icon">
            <i class="fa-solid fa-bag-shopping"></i>
            <p>Bag</p>
        </div>
    </div>
`
var section = document.getElementById('section');

var row = document.createElement('div');

var nav = document.createElement('div');

var container = document.createElement('div');

var containerm = document.createElement('div');


section.appendChild(row);
row.setAttribute('class', 'row');

row.appendChild(nav);
nav.setAttribute('class', 'nav');

row.appendChild(container);
container.setAttribute('class', 'container-main');

container.appendChild(containerm);
containerm.setAttribute('class', 'containerm');

containerm.innerHTML = `

`
   






var footer = document.getElementById('footerContainer');

var container = document.createElement('div');

var row = document.createElement('div');

var popularSearch = document.createElement('div');

var InfoContainer = document.createElement('div');

footerContainer.appendChild(container);
container.setAttribute('class', 'container-f');

container.appendChild(row);
row.setAttribute('class', 'drop-top');

container.appendChild(popularSearch);
popularSearch.setAttribute('class', 'popularSearch');

container.appendChild(InfoContainer);
InfoContainer.setAttribute('class', 'InfoContainer');

row.innerHTML = `
            <div class="shopLinks">
                        <p class="InfoTitle">
                            <a href="#">ONLINE SHOPPING </a>
                        </p>
                        
                        <ul class="footer-ul">
                            <li class="footer-li"><a href="#">Men</a></li>
                            <li class="footer-li"><a href="#">Women</a></li>
                            <li class="footer-li"><a href="#">Kids</a></li>
                            <li class="footer-li"><a href="#">Home &amp; Living</a></li>
                            <li class="footer-li"><a href="#">Beauty</a></li>
                            <li class="footer-li"><a href="#">Gift Cards</a></li>
                            <li class="footer-li"><a href="#">Myntra Insider</a></li>
                        </ul>

                        <p class="InfoTitle"> USEFUL LINKS </p>
                        <ul class="footer-ul">
                            <li class="footer-li"><a href="#">Blog </a></li>
                            <li class="footer-li"><a href="#">Careers</a></li>
                            <li class="footer-li"><a href="#">Site Map</a></li>
                            <li class="footer-li"><a href="#">Corporate Information</a></li>
                            <li class="footer-li"><a href="#">Whitehat </a></li>
                    </div>

                    <div class="customerPolicies">
                        <p class="InfoTitle"> CUSTOMER POLICIES </p>
                        <ul class="footer-ul">
                            <li class="footer-li"><a href="#">Contact Us </a>
                            <li class="footer-li"><a href="#">FAQ</a></li>
                            <li class="footer-li"><a href="#">T&amp;C</a></li>
                            <li class="footer-li"><a href="#">Terms Of Use</a></li>
                            <li class="footer-li"><a href="#">Track Orders </a></li>
                            <li class="footer-li"><a href="#">Shipping </a></li>
                            <li class="footer-li"><a href="#">Cancellation</a></li>
                            <li class="footer-li"><a href="#">Returns </a></li>
                            <li class="footer-li"><a href="#">Privacy policy</a></li>
                            <li class="footer-li"><a href="#">Grievance Officer </a></li>
                        </ul>
                    </div>

                    <div class="appExperience">
                        <p class="InfoTitle"> EXPERIENCE MYNTRA APP ON MOBILE </p>
                        <div class="downLinkContainer">
                            <a href="#">
                                <img class="androidDownLink" src="image/googl.png" style="width: 180px; height: 50px;">
                            </a>
                            <a href="#">
                                <img class="iOSDownLink" src="image/app.png" style="width: 165px; height: 50px;">
                            </a>
                        </div>
                        <div class="InfoTitle"> KEEP IN TOUCH </div>
                            <a href="#" class="facebook">
                                <img src="image/face.png" style="width: 20px; height: 20px;">
                            </a>
                            <a href="#" class="twitter">
                                <img src="image/twitter.png" style="width: 20px; height: 20px;">
                            </a>
                            <a href="#" class="youtube">
                                <img src="image/yout.png" style="width: 28px; height: 20px;">
                            </a>
                            <a href="#" class="instagram">
                                <img src="image/insta.png" style="width: 20px; height: 22px;">
                            </a>
                        </div>

                    <div class="promises">
                        <div class="row" style="padding-bottom: 25px;">
                            <div class="original">
                                <img src="image/original.png" style="width: 48px; height: 40px;">
                            </div>
                            <div>
                                <strong>100% ORIGINAL </strong>
                                 guarantee for all products at myntra.com
                            </div>
                        </div>
                        <div class="row">
                            <div class="original">
                                <img src="image/return.png" style="width: 48px; height: 49px;">
                            </div>
                            <div>
                                <strong>Return within 30days </strong>
                                of receiving your order
                            </div>
                        </div>
                    </div>
                </div>`
                    
popularSearch.innerHTML = `
<div>
                        <hr>
                        <div class="InfoTitle"> POPULAR SEARCHES </div>
                        <div class="Searchlinks">
                            <a href="#">Makeup</a>
                            <a href="#"> Dresses For Girls </a>
                            <a href="#"> T-Shirts </a>
                            <a href="#">Sandals</a>
                            <a href="#">Headphones</a>
                            <a href="#"> Babydolls </a>
                            <a href="#"> Blazers For Men </a>
                            <a href="#">Handbags</a>
                            <a href="#">Ladies Watches</a>
                            <a href="#"> Bags </a>
                            <a href="#"> Sport Shoes </a>
                            <a href="#">Reebok Shoes</a>
                            <a href="#">Puma Shoes</a>
                            <a href="#"> Boxers </a>
                            <a href="#"> Wallets </a>
                            <a href="#">Tops</a>
                            <a href="#">Earrings </a>
                            <a href="#"> Fastrack Watches </a>
                            <a href="#"> Kurtis </a>
                            <a href="#">Nike</a>
                            <a href="#">Smart Watches </a>
                            <a href="#"> Titan Watches </a>
                            <a href="#"> Designer Blouse </a>
                            <a href="#">Gowns</a>
                            <a href="#">Rings </a>
                            <a href="#"> Cricket Shoes </a>
                            <a href="#"> Forever 21 </a>
                            <a href="#">Eye Makeup</a>
                            <a href="#">Photo Frames </a>
                            <a href="#"> Punjabi Suits </a>
                            <a href="#"> Bikini </a>
                            <a href="#">Myntra Fashion Show</a>
                            <a href="#">Lipstick </a>
                            <a href="#"> Saree </a>
                            <a href="#"> Watches </a>
                            <a href="#">Dresses </a>
                            <a href="#">Lehenga </a>
                            <a href="#"> Nike Shoes </a>
                            <a href="#"> Goggles </a>
                            <a href="#">Bras </a>
                            <a href="#">Suit </a>
                            <a href="#"> Chinos </a>
                            <a href="#"> Shoes </a>
                            <a href="#">Adidas Shoes </a>
                            <a href="#">Woodland Shoes </a>
                            <a href="#"> Jewellery </a>
                            <a href="#" style="border: none;"> Designers Sarees </a>
                        </div>
                    </div>
                    <div class="InfoSection">
                    <div class="contact">
                        In case of any concern,
                        <a href="#"> Contact Us </a>
                    </div>
                    <div class="copywrite">
                        ©
                        2022
                         www.myntra.com. All rights reserved.
                    </div>
                </div>
                <hr>
                `

InfoContainer.innerHTML = `
<div class="gContainer">
                    <h3><strong>ONLINE SHOPPING MADE EASY AT MYNTRA</strong></h3>
                    <p>If you would like to experience the best of online shopping for men, women and kids in India, you
                        are at the right place. Myntra is the ultimate destination for fashion and lifestyle, being host
                        to a wide array of merchandise including <a class="s-link" href="#">clothing</a>,
                        footwear, accessories, jewellery, personal care products and more. It is time to redefine your
                        style statement with our treasure-trove of trendy items. Our online store brings you the latest
                        in designer products straight out of fashion houses. You can shop online at Myntra from the
                        comfort of your home and get your favourites delivered right to your doorstep.</p>
                    <h3><strong>BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</strong></h3>
                    <p>Be it clothing, footwear or accessories, Myntra offers you the ideal combination of fashion and
                        functionality for men, women and kids. You will realise that the sky is the limit when it comes
                        to the types of outfits that you can purchase for different occasions.</p>
                    <ul>
                        <li><strong>Smart men’s clothing</strong> - At Myntra you will find myriad options in smart
                            formal shirts and trousers, cool T-shirts and jeans, or kurta and pyjama combinations for
                            men. Wear your attitude with printed T-shirts. Create the back-to-campus vibe with varsity
                            T-shirts and distressed jeans. Be it gingham, buffalo, or window-pane style, checked shirts
                            are unbeatably smart. Team them up with chinos, cuffed jeans or cropped trousers for a smart
                            casual look. Opt for a stylish layered look with biker jackets. Head out in cloudy weather
                            with courage in water-resistant jackets. Browse through our innerwear section to find
                            supportive garments which would keep you confident in any outfit.</li>
                        <li><strong>Trendy women’s clothing</strong> - <a class="s-link" href="#">Online
                                shopping for women</a> at Myntra is a mood-elevating experience. Look hip and stay
                            comfortable with chinos and printed shorts this summer. Look hot on your date dressed in a
                            little black dress, or opt for red dresses for a sassy vibe. Striped dresses and T-shirts
                            represent the classic spirit of nautical fashion. Choose your favourites from among Bardot,
                            off-shoulder, shirt-style, blouson, embroidered and peplum tops, to name a few. Team them up
                            with skinny-fit jeans, skirts or palazzos. Kurtis and jeans make the perfect fusion-wear
                            combination for the cool urbanite. Our grand <a class="s-link" href="#">sarees</a> and
                            lehenga-choli selections are perfect to make an impression at big social events such as
                            weddings. Our salwar-kameez sets, kurtas and Patiala suits make comfortable options for
                            regular wear.</li>
                        <li><strong>Fashionable footwear</strong> - While clothes maketh the man, the type of footwear
                            you wear reflects your personality. We bring you an exhaustive lineup of options in casual
                            shoes for men, such as sneakers and loafers. Make a power statement at work dressed in
                            brogues and oxfords. Practice for your marathon with running shoes for men and women. Choose
                            shoes for individual games such as tennis, football, basketball, and the like. Or step into
                            the casual style and comfort offered by sandals, sliders, and flip-flops. Explore our lineup
                            of fashionable footwear for ladies, including pumps, heeled boots, wedge-heels, and
                            pencil-heels. Or enjoy the best of comfort and style with embellished and metallic flats.
                        </li>
                        <li><strong>Stylish accessories</strong> - Myntra is one of the best online shopping sites for
                            classy accessories that perfectly complement your outfits. You can select smart analogue or
                            digital watches and match them up with belts and ties. Pick up spacious bags, backpacks, and
                            wallets to store your essentials in style. Whether you prefer minimal jewellery or grand and
                            sparkling pieces, our online jewellery collection offers you many impressive options.</li>
                        <li><strong>Fun and frolic</strong> - Online shopping for kids at Myntra is a complete joy. Your
                            little princess is going to love the wide variety of pretty dresses, ballerina shoes,
                            headbands and clips. Delight your son by picking up sports shoes, superhero T-shirts,
                            football jerseys and much more from our online store. Check out our lineup of toys with
                            which you can create memories to cherish.</li>
                        <li><strong>Beauty begins here </strong>- You can also refresh, rejuvenate and reveal beautiful
                            skin with personal care, beauty and grooming products from Myntra. Our soaps, shower gels,
                            skin care creams, lotions and other ayurvedic products are specially formulated to reduce
                            the effect of aging and offer the ideal cleansing experience. Keep your scalp clean and your
                            hair uber-stylish with shampoos and hair care products. Choose makeup to enhance your
                            natural beauty.</li>
                    </ul>
                    <p>Myntra is one of the best online shopping sites in India which could help transform your living
                        spaces completely. Add colour and personality to your bedrooms with bed linen and curtains. Use
                        smart tableware to impress your guest. Wall decor, clocks, <a class="s-link"
                            href="#">photo frames</a> and artificial plants are sure to breathe life into
                        any corner of your home.</p>
                    <h3><strong>AFFORDABLE FASHION AT YOUR FINGERTIPS</strong></h3>
                    <p>Myntra is one of the unique online shopping sites in India where fashion is accessible to all.
                        Check out our new arrivals to view the latest designer clothing, footwear and accessories in the
                        market. You can get your hands on the trendiest style every season in western wear. You can also
                        avail the best of ethnic fashion during all Indian festive occasions. You are sure to be
                        impressed with our seasonal discounts on footwear, trousers, shirts, backpacks and more. The
                        end-of-season sale is the ultimate experience when fashion gets unbelievably affordable.</p>
                    <h3><strong>MYNTRA INSIDER</strong></h3>
                    <p>Every online shopping experience is precious. Hence, a cashless reward-based customer loyalty
                        program called <a class="s-link" href="#">Myntra Insider</a> was introduced to
                        enhance your online experience. The program is applicable to every registered customer and
                        measures rewards in the form of Insider Points.</p>
                    <p>There are four levels to achieve in the program, as the Insider Points accumulate. They are -
                        Insider, Select, Elite or Icon. Apart from offering discounts on Myntra and partner platform
                        coupons, each tier comes with its own special perks.</p>
                    <h3><strong>Myntra Studio - The Personalised Fashion Feed You Wouldn’t Want To Miss Out On</strong>
                    </h3>
                    <p>The world wide web is evolving at a relentless pace, and with an accelerated growth each passing
                        year, there is bound to be an overwhelming surge of online content. It was for this very reason
                        that personalisation of search feeds was proposed as a solution to combat the overload of
                        irrelevant information.</p>
                    <p>Several social media platforms such as Facebook and Instagram along with various online shopping
                        websites have chosen to help filter content, increasing user engagement, retention and customer
                        loyalty.</p>
                    <p>Myntra is one such online shopping website that joins the list of platforms that help curate a
                        personalised fashion feed. Named the<a class="s-link" href="#">Myntra Studio</a>,
                        this personalised search feed brings you the latest men and women’s fashion trends, celebrity
                        styles, branded content and daily updates from your favourite fashion labels.</p>
                    <p>If you are wondering how impactful Myntra Studio can be, we are listing out five perks of having
                        a rich, meaningful, and personalised fashion feed in your life.</p>
                    <ul>
                        <li><strong>Keep Up With What Your Favourite Fashion Icons Are Upto</strong></li>
                        <p>The #OOTD, AKA outfit of the day hashtag trend has been a rage among fashion bloggers and
                            stylists. The whole concept of building an outfit from scratch and showcasing it to a huge
                            community of enthusiasts using the hashtag has helped individuals with understanding trends
                            and making suitable for daily wear.</p>
                        <p>Imagine if you could keep up with every piece of clothing and accessory worn by the fashion
                            icons you look upto. From Sonam Kapoor to Hailey Baldwin Bieber, Myntra Studio has a
                            ‘Stories’ feature to help track celebrity fashion trends, exploring details such as their
                            outfit of the day. This way, you would not ever miss out on the latest celebrity fashion
                            trends, from all around the world.</p>
                        <li><strong>Quick Fashion Tip And Tricks</strong></li>
                        <p>Whether it is draping a saree into a dhoti style, wearing the right lingerie under certain
                            dresses or discovering multiple uses out of heavy ethnic wear, Myntra Studio will help you
                            acquire some unique and useful fashion hacks. Each hack is designed with the intention to
                            help you get the best wear out of everything in your wardrobe.</p>
                        <li><strong>Updates on What Is Trending and New Product Launches</strong></li>
                        <p>Since fast fashion seems to be extremely hard to keep up with these days, a quick update on
                            what is trending in accessories, clothing and footwear would certainly be of great help.
                            Myntra Studio helps you stay connected to the most beloved and sought after brands such as
                            Puma, Coverstory, The Label Life and so many more.</p>
                        <p>Your feed keeps you updated with stories of what the brands are creating including clothing,
                            footwear and jewellery, along with their new seasonal collections.</p>
                        <li><strong>Explicit Step-By-Step Beauty Routines From Experts</strong></li>
                        <p>Just like fashion, the beauty community keeps on growing, and with brands such as Huda
                            Beauty, MAC and the latest Kay Beauty by Katrina Kaif, are constantly coming up with
                            mind-blowing products. Whether it is creating a no-makeup look, different winged eyeliners,
                            do-it-yourself facial masks and other personal care beauty routines, Myntra Studio is here
                            for you.</p>
                        <li><strong>Celebrity Confessions And A Look Into Their Lives</strong></li>
                        <p>A bonus feature that Myntra Studio has in store for you is celebrity confessions and a peek
                            into their lives. So, Myntra helps you stay connected to your most beloved celebrities in a
                            matter of clicks.</p>
                        <p>If you are very particular when it comes to the content you wish to view and engage with on
                            social media, the ability to intricately filter content helps achieve that. Applying the
                            same formula for hardcore fashion lovers and shoppers, Myntra Studio brings you a daily
                            fashion fix incorporating everything that you love, all at one place. Sign up on Myntra
                            today and start organising your fashion feed, just the way you want to.</p>
                    </ul>
                    <h3><strong>MYNTRA APP</strong></h3>
                    <p>Myntra, India’s no. 1 online fashion destination justifies its fashion relevance by bringing
                        something new and chic to the table on the daily. Fashion trends seem to change at lightning
                        speed, yet the Myntra shopping app has managed to keep up without any hiccups. In addition,
                        Myntra has vowed to serve customers to the best of its ability by introducing its first-ever
                        loyalty program, The Myntra Insider. Gain access to priority delivery, early sales, lucrative
                        deals and other special perks on all your shopping with the Myntra app. Download the Myntra app
                        on your <a class="s-link" href="#">Android</a> or <a class="s-link" href="#">IOS</a>
                        device today and experience shopping like never before!</p>
                    <h3><strong>HISTORY OF MYNTRA</strong></h3>
                    <p>Becoming India’s no. 1 fashion destination is not an easy feat. Sincere efforts, digital
                        enhancements and a team of dedicated personnel with an equally loyal customer base have made
                        Myntra the online platform that it is today. The original B2B venture for personalized <a
                            class="s-link" href="#">gifts</a> was conceived in 2007 but transitioned into a
                        full-fledged ecommerce giant within a span of just a few years. By 2012, Myntra had introduced
                        350 Indian and international brands to its platform, and this has only grown in number each
                        passing year. Today Myntra sits on top of the online fashion game with an astounding social
                        media following, a loyalty program dedicated to its customers, and tempting, hard-to-say-no-to
                        deals.</p>
                    <p>The Myntra shopping app came into existence in the year 2015 to further encourage customers’
                        shopping sprees. Download the app on your Android or IOS device this very minute to experience
                        fashion like never before</p>
                    <h3><strong>SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE</strong></h3>
                    <p>Another reason why Myntra is the best of all online stores is the complete convenience that it
                        offers. You can view your favourite brands with price options for different products in one
                        place. A user-friendly interface will guide you through your selection process. Comprehensive
                        size charts, product information and high-resolution images help you make the best buying
                        decisions. You also have the freedom to choose your payment options, be it card or
                        cash-on-delivery. The 30-day returns policy gives you more power as a buyer. Additionally, the
                        try-and-buy option for select products takes customer-friendliness to the next level.</p>
                    <p>Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You
                        can also shop for your friends, family and loved-ones and avail our gift services for special
                        occasions.</p>
                </div>`