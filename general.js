AOS.init()

const HAMBURGER= document.querySelector('.hamburger')
const NAV = document.querySelector('.nav')

HAMBURGER.addEventListener('click', ()=>{
  document.querySelector('.nav').classList.toggle('nav-toggle')
})