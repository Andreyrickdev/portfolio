(function () {

    const imgOfProject = document.body.getElementsByClassName('project-img');
    const boxInfs = document.body.getElementsByClassName('box-infs');
    const closeIcon = document.body.getElementsByClassName('material-icons');
    
    for (let i = 0; i < imgOfProject.length; i++) {
        imgOfProject[i].addEventListener('click', showOrHide);
        closeIcon[i].addEventListener('click', hide);
    
        function showOrHide () {
    
            boxInfs[i].classList.toggle('active');
            closeIcon[i].classList.toggle('active');
        
        }
    
        function hide () {
    
            boxInfs[i].classList.remove('active');
            closeIcon[i].classList.remove('active');
        }
    }
    

})();