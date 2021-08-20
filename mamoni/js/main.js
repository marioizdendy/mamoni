menu.onclick = function myFunction() {
    var x = document.getElementById('topnav');

    if (x.className === 'nav') {
        x.className += "responsive";
    } else {
        x.className = 'nav';
    }
}