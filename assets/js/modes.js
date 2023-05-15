
const toggle = document.getElementById("toggle");
const darkOrLight = document.getElementById('dark-or-light'); 

const header = document.getElementsByClassName('bg-header')[0];
const article = document.getElementsByClassName('bg-article')[0];
const projects = document.getElementsByClassName('bg-projects')[0];
const footer = document.getElementsByClassName('bg-footer')[0];

toggle.addEventListener("change", () => {

    darkOrLight.className = darkOrLight.className == 'toggle dark' ? 'toggle light' : 'toggle dark';
    header.className = header.className == 'bg-header' ? 'bg-header light' : 'bg-header';
    article.className = article.className == 'bg-article' ? 'bg-article light' : 'bg-article';
    projects.className = projects.className == 'bg-projects' ? 'bg-projects light' : 'bg-projects';
    footer.className = footer.className == 'bg-footer' ? 'bg-footer light' : 'bg-footer';
});