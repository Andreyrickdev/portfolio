(function () {

    const hamburger = document.getElementsByClassName('dad-hamburger')[0];
    const transparentBox = document.getElementById('box-of-tagsSkills');
    const skillsBox = document.getElementById('tagsSkills');
    
    hamburger.addEventListener('click', () => {
        transparentBox.classList.toggle('active');
        skillsBox.classList.toggle('active');
    })

})();