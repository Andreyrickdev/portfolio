const menuItems = document.querySelectorAll('#menu li a');

menuItems.forEach (item => {
    item.addEventListener('click', scrollToIdOnClick);
});