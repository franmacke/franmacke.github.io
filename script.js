var winX = window.innerWidth;
var winY = window.innerHeight;

document.addEventListener('DOMContentLoaded', function() {

    
    // setting client view
    window.scrollTo(0,0);
    document.querySelector('#welcome-message').style.paddingTop = `${winY/2 - 85}px`;
    document.querySelector('.page-header').style.height = `${winY}px`;

    // listen for resizes

    
    window.addEventListener('resize', function (){
        winX = window.innerWidth;
        winY = window.innerHeight;
        document.querySelector('#welcome-message').style.paddingTop = `${winY/2 - 85}px`;
        document.querySelector('.page-header').style.height = `${winY}px`;
    })
    
    // navigation (listeners)

    document.querySelector('#btn-about-me').addEventListener('click', function(){
        document.querySelector('#second-part').scrollIntoView({behavior: "smooth"});
    })
    document.querySelector('#btn-projects').addEventListener('click', function(){
        document.querySelector('#third-part').scrollIntoView({behavior: "smooth"});
    })
    document.querySelector('#btn-contact').addEventListener('click', function(){
        document.querySelector('#fourth-part').scrollIntoView({behavior: "smooth"});
    })
    if(document.querySelector('.nav-mobile')) {
        document.querySelector('.nav-mobile').addEventListener('click', () => {
            document.querySelector('.nav-links').classList.toggle('nav-toggle')
            .then(document.querySelectorAll('.nav-links li').forEach(element => {
                element.classList.toggle('toggle-text');
            }));
        })
    }
   
    
    // scrolling through page

    window.onscroll = () => {
        let y = window.scrollY;
        
        if (y >= winY/2) {
            document.querySelector('.pepe').style.animationPlayState = 'running';
            
        } else {
            document.querySelector('.pepe').style.animationPlayState = 'paused';
        }

        if (document.querySelector('#third-part').getBoundingClientRect().y - y < 0){
            document.querySelectorAll('.project').forEach(element => element.style.animationPlayState = 'running');

        } else {
            document.querySelectorAll('.project').forEach(element => element.style.animationPlayState = 'paused');
        }

    }

    render_diapos();
});

//language render element

function render_diapos() {

    for (let element of languages) {

        const div = document.createElement('div');
        const img = document.createElement('img');
        const title = document.createElement('span');

        title.innerHTML = element.name;
        title.setAttribute('class', 'row lang-title');
        div.setAttribute('class', 'languaje');
        img.setAttribute('class', 'row');
        img.setAttribute('class', 'lang-img');
        img.setAttribute('src', element["img"]);

        div.appendChild(img);
        div.appendChild(title);

        
        document.querySelector('#section1').appendChild(div);
        
    }

}

const languages = [
    {
        "name": "HTML",
        "desc": "frontend",
        "img": "https://img.icons8.com/color/48/000000/html-5.png",
    },
    {
        "name": "CSS",
        "desc": "frontend",
        "img": "https://img.icons8.com/color/48/000000/css3.png",
    },
    {
        "name": "Python",
        "desc": "frontend",
        "img": "https://img.icons8.com/color/48/000000/python.png",
    },
    {
        "name": "JavaScript",
        "desc": "frontend",
        "img": "https://img.icons8.com/color/48/000000/javascript.png",
    },
    {
        "name": "django",
        "desc": "frontend",
        "img": "https://img.icons8.com/windows/48/000000/django.png",
    },
];


