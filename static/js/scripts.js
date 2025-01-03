// Sidebar Toggle
document.getElementById('sidebarToggle').addEventListener('click', function () {
    document.body.classList.toggle('sidebar-hidden');
});

// Responsive sidebar
if (window.innerWidth < 768) {
    document.body.classList.add('sidebar-hidden');
}

// Handle responsive sidebar on window resize
window.addEventListener('resize', function () {
    if (window.innerWidth < 768) {
        document.body.classList.add('sidebar-hidden');
    } else {
        document.body.classList.remove('sidebar-hidden');
    }
});