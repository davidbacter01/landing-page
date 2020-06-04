/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navList = document.getElementById('navbar__list');
const sectionsList = document.querySelectorAll('section');
const footer = document.querySelector('.page__footer');
/**
 * End Global Variables
 * 
 * Start Helper Functions
 *
*/


const navigateTo = (element) => {
    element.scrollIntoView({
        behavior: 'smooth'
    });
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
//create li elements for every section and add a elements inside them with href set to coresponding section
for (let i = 0; i < sectionsList.length; i++) {
    navList.style = "display: none;";
    const navItem = document.createElement('li');
    const anchorItem = `<a id=${sectionsList[i].getAttribute('id').substring(7)} href="#${sectionsList[i].getAttribute('id')}">${sectionsList[i].getAttribute('data-nav')}</a>`;
    navItem.innerHTML = anchorItem;
    navItem.classList.add('menu__link');
    navList.appendChild(navItem);
    navList.style = "display: inherit;";
}

// Add class 'your-class-active' to section when near top of viewport
const makeActive = () => {
    for (const section of sectionsList) {
        const box = section.getBoundingClientRect();
        const linkActive = document.getElementById(section.getAttribute('id').substring(7)).parentElement;
        if (box.top <= 200 && box.bottom >= 600) {
            section.classList.add('your-active-class');
            linkActive.classList.add('active__link');
        } else {
            section.classList.remove('your-active-class');
            linkActive.classList.remove('active__link');
        }
    }
}
// Scroll to anchor ID using scrollIntoView
function setLinkEvents() {
    const links = document.querySelectorAll('a');
    let targetIds = [];
    for (let i = 0; i < links.length; i++) {
        index = i + 1;
        targetIds.push(`section${index}`);
        links[i].addEventListener('click', (event) => {
            event.preventDefault();
            const targetElement = document.getElementById(targetIds[i]);
            navigateTo(targetElement);
        });
    }
}


/**
 * End Main Functions
 * Begin Events
 *
*/
document.addEventListener('scroll', makeActive);
setLinkEvents();





