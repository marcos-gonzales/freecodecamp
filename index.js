const arrowImage = document.querySelector('#svg')
const welcomeButton = document.querySelector('.welcome-section-button')
const homeLink = document.querySelector('.home')
const projectsLink = document.querySelector('.projects')
const aboutMeLink = document.querySelector('.about')
const contactLink = document.querySelector('.contact')
const sections = document.querySelectorAll('section')
const projectImage = document.querySelectorAll('.project-image')
const clickMe = document.querySelectorAll('.click-me')
const html = document.querySelectorAll('.html')
const css = document.querySelectorAll('.css')
const javascript = document.querySelectorAll('.javascript')
const nodejs = document.querySelectorAll('.nodejs')
const pug = document.querySelectorAll('.pug')
const navbarMobile = document.querySelector('#navbar-mobile')
const navbarMobileUl = document.querySelector('.navbar-mobile-ul')

// animation for home buttion

welcomeButton.addEventListener('mouseover', function (e) {
  welcomeButton.classList.add('welcome-action')
  arrowImage.classList.add('welcome-action-image')
})

welcomeButton.addEventListener('mouseout', function (e) {
  welcomeButton.classList.remove('welcome-action')
  arrowImage.classList.remove('welcome-action-image')
})

//Intersection OBserver function

const config = {
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.2,
}

let observer = new IntersectionObserver(function (entries) {
  // entries: Array of observed elements
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      interSectionHandler(entry)
    }
  })
}, config)

function interSectionHandler(entry) {
  const sectionHTML = entry.target.id
  if (entry.target.id === 'welcome-section') {
    projectsLink.classList.remove('active')
    homeLink.classList.add('active')
  }
  if (entry.target.id === 'projects') {
    homeLink.classList.remove('active')
    aboutMeLink.classList.remove('active')
    projectsLink.classList.add('active')
  }
  if (entry.target.id === 'about-me') {
    projectsLink.classList.remove('active')
    contactLink.classList.remove('active')
    aboutMeLink.classList.add('active')
    html[0].classList.remove('html')
    css[0].classList.remove('css')
    javascript[0].classList.remove('javascript')
    nodejs[0].classList.remove('nodejs')
    pug[0].classList.remove('pug')
    html[0].classList.add('htmls')
    css[0].classList.add('csss')
    javascript[0].classList.add('javascripts')
    nodejs[0].classList.add('nodejss')
    pug[0].classList.add('pugs')
  }
  if (entry.target.id === 'contact') {
    aboutMeLink.classList.remove('active')
    contactLink.classList.add('active')
  }
}

sections.forEach((section) => {
  observer.observe(section)
})

//Modal pop up thingy

projectImage.forEach((project) => {
  project.addEventListener('mouseover', function (e) {
    if (e.target.nextElementSibling.classList[0] === 'click-me') {
      e.target.style.opacity = 0.3
      e.target.nextElementSibling.style.display = 'grid'
    }
    if (
      e.target.nextElementSibling.lastElementChild.classList ===
      'project-section-button'
    ) {
      e.target.nextElementSibling.lastElementChild.style.display = 'grid'
      e.target.nextElementSibling.lastElementChild.style.opacity = 0.3
    }
  })
})

if (clickMe) {
  clickMe.forEach((project) => {
    project.addEventListener('mouseleave', function () {
      projectImage[0].style.opacity = 1
      projectImage[1].style.opacity = 1
      projectImage[2].style.opacity = 1
      project.style.display = 'none'
    })
  })
}

navbarMobile.addEventListener('click', function (e) {
  if (navbarMobileUl.className === 'navbar-mobile-ul-active') {
    navbarMobileUl.classList.remove('navbar-mobile-ul-active')
    navbarMobileUl.classList.add('navbar-mobile-ul')
    return
  }
  navbarMobileUl.classList.remove('navbar-mobile-ul')
  navbarMobileUl.classList.add('navbar-mobile-ul-active')
  return
})

let mouseOver = document.querySelector('.image-project-mouse')

// projectImage.forEach(project => {
//   project.addEventListener('mouseover', function() {
//     mouseOver.style.display = 'flex';
//   })
// })

if (mouseOver) {
  mouseOver.addEventListener('mouseleave', function () {
    mouseOver.style.display = 'none'
  })
}
