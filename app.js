const btnFlintAndSteel = document.querySelector('#flintAndSteel');
const portals = document.querySelectorAll('.portal-close');
const domBody = document.querySelector('body');
const portalAudio = document.querySelector('#portalAudio');
const audioClick = document.querySelector('#audioClick');

btnFlintAndSteel.addEventListener('click', () => {
    portal.classList.add('trigger-flint-and-steel')
    audioClick.play()
    portals.forEach((item) => {
        item.classList.add('portal-enabled')
        item.addEventListener('mouseover', () => {
            item.src = "./portal.webp"
            portalAudio.play()
        })
        item.addEventListener('mouseout', () => {
            item.src = "./portal_close.webp"
            portalAudio.pause()
            portalAudio.currentTime = '0'
        })
    })    
})