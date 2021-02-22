document.addEventListener('DOMContentLoaded', () => {

    let winX = window.innerWidth;
    let winY = window.innerHeight;

    console.log(`Initial screen size:  ${winX}, ${winY}`);
    
    window.addEventListener('resize', (winX, winY) => {
        winX = innerWidth;
        winY = innerHeight;
        
        console.log (`Resized screen size:  ${winX}, ${winY}`);
    })


});