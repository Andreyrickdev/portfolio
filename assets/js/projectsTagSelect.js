const tags = document.getElementById('tagsSkills');
const tagsSkills = tags.getElementsByTagName('li');
const dadAllProjects = document.getElementById('all-projects');
const allProjects = dadAllProjects.getElementsByTagName('li');
const htmlCssTags = document.getElementsByClassName('h-c');
const jsTags = document.getElementsByClassName('js');
const transparentBoxx = document.getElementById('box-of-tagsSkills');
const skillsBoxx = document.getElementById('tagsSkills');

for (let i = 0; i < tagsSkills.length; i++) {

    tagsSkills[i].addEventListener('click', () => {

        if(i === 0) {
            for (let tags of allProjects) {
                tags.style.display = 'inline-block';
            }

            transparentBoxx.classList.remove('active');
            skillsBoxx.classList.remove('active');
        }

        if(i === 1) {
            for(let tags of allProjects) {
                tags.style.display = 'none';
            }

            for(let tags of htmlCssTags) {
                tags.style.display = 'inline-block';
            }

            transparentBoxx.classList.remove('active');
            skillsBoxx.classList.remove('active');
        }

        if(i === 2) {
            for(let tags of allProjects) {
                tags.style.display = 'none';
            }

            for(let tags of jsTags) {
                tags.style.display = 'inline-block';
            }

            transparentBoxx.classList.remove('active');
            skillsBoxx.classList.remove('active');
        }

    })

}

(function () {

})();