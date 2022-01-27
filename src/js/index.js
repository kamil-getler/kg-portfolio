import '../scss/main.scss';






const kontakt =document.getElementById("kontakt") 
const projekt =document.getElementById("projekt") 
const box2 =document.getElementById("click2") 
const box3 =document.getElementById("click5") 

kontakt.addEventListener('click', () => {
    box2.classList.toggle('new')
})


projekt.addEventListener('click', () => {

box3.classList.toggle('new')
})