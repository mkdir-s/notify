const button = document.querySelector('.button');
const notify = document.querySelector('.notify-banner');

function showNotify() {
    notify.classList.add('_active');
    setInterval(() => {
        notify.classList.remove('_active');
    }, 1500);
}

button.addEventListener('click', showNotify)