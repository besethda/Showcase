const HAMBURGER= document.querySelector('.hamburger')

HAMBURGER.addEventListener('click', ()=>{
  document.querySelector('.nav').classList.toggle('nav-toggle')
})