const toggle = document.getElementById('toggle');
const menu = document.getElementById('menubar');

document.onclick = function (e) {
    if (e.target.id !== 'toggle' && e.target.id !== 'menu') {
           toggle.classList.remove('active');
    menu.classList.remove('active');
    }
}

toggle.onclick = function () {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
};

/* modal */
document.querySelector('.join').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'flex';
});
document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'none';
});
