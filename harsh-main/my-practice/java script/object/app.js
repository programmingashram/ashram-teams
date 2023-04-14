let row = document.querySelector(".sys-grid");
let products = {
    healthcare  : [
        {
            img: "https://www.bigvalueshop.com/wp-content/uploads/2020/10/Elements-Well-Hart_cover.jpeg",
            brand: "Elements Wellness",
            name: "Well Hart",
            mrp: "725", 
            contains: "60 Veg Capsules",
            capeblities: "30+ (whose lifestyle is stressful)",
            when: "after the meal",
            whom: "Man & Woman",
            ingredients: "Pushkarmool, Arjuna, Fenugreek, etc",
            discription:"<p><strong>ELEMENTS WELL HART 60CAPS</strong>, This modern formulation combines the use of carefully chosen ingredients with a scientific process to deliver superior results. Arjuna's cardio tonic properties are known in Ayurveda for centuries and validated by today's</p> <p>scientific tools. Uniquely combined with Pushkarmool and specially processed Fenugreek, Elements Well Hart is designed to provide lipid profile management and reduction of elevated triglycerides. This formula incorporates a special Bhavna processing step involving Munakka, Shatavari and Guduchi that potentiates the benefit of these herbs.</p>"
        },
        {
            img: "https://www.bigvalueshop.com/wp-content/uploads/2020/11/Elements-Daily-Detox.jpeg",
            brand: "Elements Wellness",
            name: "Daily Detox",
            mrp: "900", 
            contains: "60 Veg Capsules",
            capeblities: "30+ (whose lifestyle is stressful)",
            when: "after the meal",
            whom: "Man & Woman",
            ingredients: "Kalmegh, Tulsi, Varun, Punarnava, etc",
            discription:"<p><strong>ELEMENTS DAILY DETOX 60CAPS</strong>,Certainly, detoxification of our body is needed now more than ever especially what with increased level of stress, improper and imbalanced diet, unhealthy food consumption and improper sleep. Over a period of time, all the aforementioned issues accumulate toxins in our various organs and affect our overall body resistance. To deal with this, Daily Detox from Elements helps in improving body metabolism reduces and eliminates toxins and helps building body resistance. Daily Detox as well takes care of the performance of digestive system and helps maintaining our health. With Elements Daily Detox, we can as well detoxify our body on a daily basis."
        },
        {
            img: "https://5.imimg.com/data5/SELLER/Default/2022/10/SA/FC/UT/1819640/elements-wellness-phyt-stress-capsules-500x500.jpg",
            brand: "Elements Wellness",
            name: "Phyt Stress",
            mrp: "1020", 
            contains: "60 Veg Capsules",
            capeblities: "18+ (whose lifestyle is stressful)",
            when: "after the meal",
            whom: "Man & Woman",
            ingredients: " Tulsi, Kalmegh, Punarnava, Varun, and 5 other herbs",
            discription:"Dealing with stress has certainly become a serious challenge these days. When we are exposed to continuous and brutal stress, our body is put to test constantly our health and performance is affected. Well, of course there is a way to deal with  this and the answer is Phyt Stress. This capsule has scientifically studied and proven compounds such as ursolic acid, piperine, cardiosides and withanolides that can deal with stress. These combinations in Phyt Stress helps us to deal with stress and at the same time maintain our health. The capsule as well promotes good sleep, calms mind and builds  immunity."
        },
        {
            img: "https://rukminim1.flixcart.com/image/416/416/l19m93k0/ayurvedic/2/t/d/no-vedna-capsule-60-elements-wellness-original-imagcvgwfcf9qj5w.jpeg?q=70",
            brand: "Elements Wellness",
            name: "No Vedna",
            mrp: "1150", 
            contains: "60 Veg Capsules",
            capeblities: "30+ (whose lifestyle is stressful)",
            when: "after the meal",
            whom: "Man & Woman",
            ingredients: "Boswellia, Curcuma, Moringa, Punarnava, etc",
            discription:"<p><strong>ELEMENTS NO VEDNA 60CAPS</strong>,rom body pain to relaxing your joints and muscle stiffness, this No-Vedana capsules is one of the best capsules out there! This capsule is made using a combination of Ayurvedic ingredients that are best known for reducing inflammation. This capsule as well takes care of easing muscle aches, relieving pain and discomfort of joint. It is scientifically proven that the ingredients used in this capsule are exclusively for anti-inflammatory purpose and analgesic activity. Apart from relieving pain and easing stiff joints, No Vedana as well promotes smoother movements of the body..."
        },
        {
            img: "https://5.imimg.com/data5/SELLER/Default/2021/5/BB/TE/ZU/13070300/1-natcium-500x500.jpgt/d/no-vehttps://5.imimg.com/data5/SELLER/Default/2021/5/BB/TE/ZU/13070300/1-natcium-500x500.jpgdna-capsule-60-elements-wellness-original-imagcvgwfcf9qj5w.jpeg?q=70",
            brand: "Elements Wellness",
            name: "Natcium",
            mrp: "1250", 
            contains: "60 Veg Capsules",
            capeblities: "20+ (whose lifestyle is stressful)",
            when: "after the meal",
            whom: "Man & Woman",
            ingredients: "Dairy Milk Calcium, Pipperine & Gokshur Extracts, Sodium Starch Glycolate, Starch powder, Cross Carmellose Sodium (E468), magnesium stearate (E572), Talc (E553b).",
            discription:"Calcium is a mineral that primarily functions in the body by strengthening bones and teeth. As per Ayurveda, adequate levels of calcium promote development of healthy hair and prevent hair loss as well. Deficiency in calcium in the body can create problems like osteoporosis, joint pain and even fractures . ICMR and FSSAI have published daily requirements of calcium for children, adults, women and pregnant women . Many a time, our diet does not provide us the requisite quantity of calcium and hence the need for calcium supplements. Elements Wellness Natcium is the first of its kind calcium supplement in the market: for more reasons than one. 1. It provides natural calcium sourced from milk 2. It is fortified with Magnesium, Potassium and Phosphorus to aid better absorption in the body 3. Elements Wellness Natcium also contains proven herbs like Gokshur that enables dissolution of kidney and renal stones as well as Pipalli that increases absorption of calcium by the body Elements Wellness Natcium is therefore much more than a calcium supplement- your true companion for healthy bones, teeth and hair."
            
        },
        {
            img: "https://rukminim1.flixcart.com/image/416/416/l19m93k0/ayurvedic/2/t/d/no-vedna-capsule-60-elements-wellness-original-imagcvgwfcf9qj5w.jpeg?q=70",
            brand: "Elements Wellness",
            name: "Uri Flush",
            mrp: "1100", 
            contains: "60 Veg Capsules",
            capeblities: "25+ (whose lifestyle is stressful)",
            when: "after the meal",
            whom: "Man & Woman",
            ingredients: "Boswellia, Curcuma, Moringa, Punarnava, etc",
            discription:"<p><strong>ELEMENTS NO VEDNA 60CAPS</strong>,rom body pain to relaxing your joints and muscle stiffness, this No-Vedana capsules is one of the best capsules out there! This capsule is made using a combination of Ayurvedic ingredients that are best known for reducing inflammation. This capsule as well takes care of easing muscle aches, relieving pain and discomfort of joint. It is scientifically proven that the ingredients used in this capsule are exclusively for anti-inflammatory purpose and analgesic activity. Apart from relieving pain and easing stiff joints, No Vedana as well promotes smoother movements of the body..."
        },
    ]
}


let block = document.querySelector('#tbody  tr');
for(let i of products.healthcare){
    block.innerHTML += `
        <td>
            <div class="pro-img">
                <img src="${i.img}" class="img-rwd" alt="">
            </div>
            <ul>
                <li class="brand">
                    ${i.brand}  
                </li>
                <li class="name">
                  ${i.name}
                </li>
                <li class="contains">
                    ${i.contains}
                </li>
                <li class="capeblities">
                ${i.capeblities}
                </li>
                <li class="whom">
                    ${i.whom}
                </li>
                <li class="ingredients">
                    ${i.ingredients}
                </li>
                <li class="discription">
                <p>
                    ${i.discription}
                </p>
                </li>

            </ul>
        </td>
    `
}

