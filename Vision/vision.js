// Toggle main menu
function toggleMenu() {
    const navbarNav = document.getElementById('navbarNav');
    const navOverlay = document.getElementById('navOverlay');
    navbarNav.classList.toggle('show');
    navOverlay.style.display = navbarNav.classList.contains('show') ? 'block' : 'none';
}

// Set active link
function setActive(element) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));
    element.classList.add('active');
}

// Toggle profile dropdown
function toggleProfileMenu() {
    const profileMenu = document.getElementById('profileMenu');
    profileMenu.style.display = profileMenu.style.display === 'block' ? 'none' : 'block';
}

// Hide dropdown when clicking outside
document.addEventListener('click', function(event) {
    const profileMenu = document.getElementById('profileMenu');
    const isClickInside = profileMenu.contains(event.target) || event.target.closest('.profile-btn');
    if (!isClickInside) {
        profileMenu.style.display = 'none';
    }
});
