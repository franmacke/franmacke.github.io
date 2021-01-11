// import {default as languages} from 'projects.js'

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
        btn_go_up();
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
    document.querySelector('#btn-go-up').addEventListener('click', () => {
        document.querySelector('body').scrollIntoView({behavior: "smooth", block: "start"})
    });
    
   
    
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

function btn_go_up () {
    if (winY <= window.scrollY){
        document.querySelector('#btn-go-up').style.visibility = 'visible';
    
        document.querySelector('#btn-go-up').style.marginTop = `${winY-winY*0.1}px`;
        document.querySelector('#btn-go-up').style.marginLeft = `${winX-winX*0.1}px`;
        document.querySelector('#btn-go-up').style.animationPlayState = 'running';
    } else {
        document.querySelector('#btn-go-up').style.visibility = 'hidden';
    
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


