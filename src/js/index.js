const navbarNav = document.getElementById('navbar-nav');
const hamburgerMenu = document.getElementById('hamburger-menu');
const sidebar = document.getElementById('mobile-sidebar');
const closeSidebar = document.getElementById('close-sidebar');

// Toggle the sidebar when the hamburger menu is clicked
hamburgerMenu.onclick = () => {
    sidebar.classList.toggle('hidden');
};

// Close the sidebar when the 'x' button is clicked
closeSidebar.onclick = () => {
    sidebar.classList.add('hidden');
};

// Close the sidebar when clicking outside of it
document.addEventListener('click', function (e) {
    if (!sidebar.contains(e.target) && !hamburgerMenu.contains(e.target)) {
        sidebar.classList.add('hidden');
    }
});
