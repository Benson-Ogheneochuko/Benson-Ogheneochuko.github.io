

document.getElementById("copyrightYear").innerHTML = new Date().getFullYear();
const toggleButton= document.getElementById('mobile-nav-toggle')
const nav= document.getElementById('navigation')

const mobile_menu= ()=>{
	document.querySelectorAll('.nav[data-visible] a').forEach( a=> {
		a.addEventListener('click', toggleNavigation);
	})
}

// Function to toggle ARIA attribute and navigation visibility
function toggleNavigation() {
    const expanded = toggleButton.getAttribute('aria-expanded') == 'true';
    toggleButton.setAttribute('aria-expanded', !expanded);
    nav.toggleAttribute('data-visible');
    toggleButton.classList.toggle("menu-open");
    mobile_menu()
}
toggleButton.addEventListener('click', toggleNavigation);

const contact_buttons = document.querySelectorAll('button[data-target="contact"]');
contact_buttons.forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
});

// add sticky header
window.addEventListener('scroll', () => {
    const scrolledHeight = window.scrollY;
    const header = document.getElementById('header');
    if (scrolledHeight >= (0.15 * window.innerHeight)) { // 15% of the window height
        header.classList.add('sticky-header', 'subtle-shadow');
    } else {
        header.classList.remove('sticky-header', 'subtle-shadow');
    }
});

