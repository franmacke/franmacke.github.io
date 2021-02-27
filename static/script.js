document.addEventListener('DOMContentLoaded', () => {

    let winX = window.innerWidth;
    let winY = window.innerHeight;

    console.log(`Initial screen size:  ${winX}, ${winY}`);
    
    window.addEventListener('resize', (winX, winY) => {
        winX = innerWidth;
        winY = innerHeight;
    })

    if (winX <= 768) {
        const navButton = document.querySelector(".nav-burguer");
        const navLinks = document.querySelector(".nav-links");

        navButton.addEventListener('click', () => {
            navLinks.classList.toggle('toggle');
        })

    } 

});