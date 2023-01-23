let ashramLanguage = {
    javascript:{
        icon:"js",
        title:'JavaScript',
        description:"Learn JavaScript with easy and best tutorial or join ashram for coaching",
    },
    angular:{
        icon:"angular",
        title:'Angular',
        description:"Learn JavaScript with easy and best tutorial or join ashram for coaching",
    },
    react:{
        icon:"react",
        title:'React Js',
        description:"Learn JavaScript with easy and best tutorial or join ashram for coaching",
    },
    bootstrap:{
        icon:"bootstrap",
        title:'Bootstrap',
        description:"Learn JavaScript with easy and best tutorial or join ashram for coaching",
    },
    sass:{
        icon:"sass",
        title:'SCSS',
        description:"Learn JavaScript with easy and best tutorial or join ashram for coaching",
    }
}

let course = document.querySelector('#corses .row');

for(let u in ashramLanguage){
    course.innerHTML +=`
    <div class="col-md-3">
        <div class="main ${ashramLanguage[u].icon}">
            <div class="icon">
                <i class="fa-brands fa-${ashramLanguage[u].icon} bg-${ashramLanguage[u].icon}" aria-hidden="true"></i>
            </div>
            <div class="details">
                <h2>${ashramLanguage[u].title}</h2>
                <p>${ashramLanguage[u].description}</p>
                <a href="#">Check Syllabus</a>
            </div>
        </div>
    </div>  
    `;
}