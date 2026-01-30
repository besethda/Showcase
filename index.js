import { Octokit } from "https://esm.sh/octokit"

let image = document.getElementsByClassName('background-img')
new simpleParallax(image, {
  orientation: "right",
  scale: 2.1,
  delay: 1,
  overflow: true
})

const getProjects = async () => {
  const octokit = new Octokit({
    // auth: ''
  })
  try {
    let response = await octokit.request('GET /user/repos', {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
    return response
    
  } catch (error) {
    
  }

}

const printProjects = async () => {
  let publicRepos = await getProjects()
  console.log(publicRepos)
  const publicReposElement = document.querySelector('.public-repos')
  publicRepos.data.forEach(repo => {
    let currentRepo = document.createElement('a')
    currentRepo.setAttribute("href", `${repo.html_url}`)
    currentRepo.classList.add("repo")
    currentRepo.textContent = `${repo.name}`
    publicReposElement.appendChild(currentRepo)
    });
}

document.querySelectorAll('.dropdown-option').forEach(element => {
  element.addEventListener('click', (event)=> {
    event.preventDefault()
    resetMenu()
    resetContact()
    resetHome()
    element.classList.add('active-option')
    scrollIntoView(element)
  })
});

const contact = document.querySelector('#contact-link')
contact.addEventListener('click', (event)=> {
  event.preventDefault()
  resetMenu()
  resetContact()
  resetHome()
  contact.classList.add('contact-active')

  scrollIntoView(contact)
})

const home = document.querySelector('#home-link')
home.addEventListener('click', (event)=> {
  event.preventDefault()
  resetMenu()
  resetContact()
  resetHome()
  home.classList.add('contact-active')

  scrollIntoView(home)
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

const resetHome = ()=> {
  const home = document.querySelector('#home-link')
  home.classList.remove('contact-active')
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
  const htmlElement = document.querySelector('html')
  if(window.innerWidth < 600) {
    projects.forEach(element => {
      element.setAttribute('data-aos', 'fade-up-right')
      element.setAttribute('data-aos-anchor-placement', 'bottom-center')
      element.setAttribute('data-aos-duration', '1500')
      htmlElement.style.overflowY = 'scroll'
    });
  } else {
    projects.forEach(element => {
      element.setAttribute('data-aos', 'fade-up-right')
      element.setAttribute('data-aos-anchor-placement', 'top-center')
      element.setAttribute('data-aos-duration', '1500')
      htmlElement.style.overflowY = 'hidden'
    });
  }
}

addAnimation()
printProjects()