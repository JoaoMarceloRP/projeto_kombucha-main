document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('loginModal');
    const openModalLink = document.getElementById('openModalLink');
    const closeBtn = document.querySelector('.closeBtn');

    openModalLink.onclick = function(event) {
        event.preventDefault();
        modal.style.display = 'block';
    };

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});
