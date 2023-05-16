const menuItems = document.querySelectorAll('#menu li a');

menuItems.forEach (item => {
    item.addEventListener('click', scrollToIdOnClick);
});

function getScrollTopByHref (element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}