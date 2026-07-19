window.addEventListener("scroll",()=>{

document.querySelectorAll("section").forEach(section=>{

const position=section.getBoundingClientRect().top;

if(position<window.innerHeight-100){

section.style.opacity=1;
section.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity=0;

section.style.transform="translateY(40px)";

section.style.transition=".8s";

});