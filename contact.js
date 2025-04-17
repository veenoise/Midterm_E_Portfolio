const sendBtn = document.querySelector('#sendBtn')
const audioClick = document.querySelector('#audioClick')

sendBtn.addEventListener('click', () => {
    audioClick.play()
})