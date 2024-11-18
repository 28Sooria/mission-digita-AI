function toggleMenu() {
    const navbarNav = document.getElementById('navbarNav');
    const navOverlay = document.getElementById('navOverlay');
    navbarNav.classList.toggle('show');
    navOverlay.style.display = navbarNav.classList.contains('show') ? 'block' : 'none';
}

function setActive(element) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));
    element.classList.add('active');
}
