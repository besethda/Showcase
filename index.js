let image = document.getElementsByClassName('background-img')
new simpleParallax(image, {
  orientation: "right",
  scale: 2.1,
  delay: 1,
  overflow: true
})

document.querySelectorAll('.dropdown-option').forEach(element => {
  element.addEventListener('click', (event)=> {
    event.preventDefault()
    resetMenu()
    resetContact()
    element.classList.add('active-option')
    scrollIntoView(element)
  })
});

const contact = document.querySelector('#contact-link')
contact.addEventListener('click', (event)=> {
  event.preventDefault()
  resetMenu()
  resetContact()
  contact.classList.add('contact-active')
  console.log(contact)

  scrollIntoView(contact)

})

const resetMenu = () => {
  let activeClass = document.querySelectorAll('.active-option')
  activeClass.forEach(option => {
    option.classList.remove('active-option')
  })
}

const resetContact = ()=> {
  const contact = document.querySelector('#contact-link')
  contact.classList.remove('contact-active')
}

const scrollIntoView = (element) => {
  const thisId = element.getAttribute('href')
  const thisElement = document.querySelector(thisId)
  thisElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

const addAnimation = () => {
  const projects = document.querySelectorAll('.project')
  if(window.innerWidth < 600) {
    projects.forEach(element => {
      element.setAttribute('data-aos', 'fade-up-right')
      element.setAttribute('data-aos-anchor-placement', 'bottom-center')
      element.setAttribute('data-aos-duration', '1500')
    });
  } 
  projects.forEach(element => {
    element.setAttribute('data-aos', 'fade-up-right')
    element.setAttribute('data-aos-anchor-placement', 'top-center')
    element.setAttribute('data-aos-duration', '1500')
  });
}

addAnimation()
