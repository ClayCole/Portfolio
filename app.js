const hamButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamButton.addEventListener('click', toggleButton)

// var logoSwitch = document.getElementsByClassName('Logo');

// logoSwitch.addEventListener('click', function(logoSwitch) {
//     logoSwitch.target.classList.toggle('logo2');
// })